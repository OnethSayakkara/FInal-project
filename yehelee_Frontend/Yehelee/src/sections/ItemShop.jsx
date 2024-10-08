import React, { useEffect, useState,useContext } from 'react';
import axios from 'axios';
import MenuHeader from './MenuHeader';
import { FaShoppingCart } from "react-icons/fa";
import BannerSlider from './BannerSlider';
import { Range } from 'react-range'; // Import react-range for slider
import Subcat from './Subcat';
import ShopHeader from '../components/ShopHeader';
import { useCart } from '../components/CartContext';
import { toast } from 'react-toastify';


const ItemShop = () => {
  const [products, setProducts] = useState({}); // State to store grouped products
  const [selectedCategory, setSelectedCategory] = useState(null); // State to store selected category
  const [categories, setCategories] = useState([]); // State to store categories
  const [minPrice] = useState(1000); // Minimum price
  const [maxPrice] = useState(20000); // Maximum price
  const [priceRange, setPriceRange] = useState([1000, 20000]);
  const { addToCart } = useCart();


  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch all products from the database
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/auth/product');
      
      // Group products by category
      const groupedProducts = response.data.reduce((categories, product) => {
        const category = product.category;
        if (!categories[category]) {
          categories[category] = [];
        }
        categories[category].push(product);
        return categories;
      }, {});

      // Set products and extract categories for dropdown
      setProducts(groupedProducts);
      setCategories(Object.keys(groupedProducts)); // Get the list of unique categories
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category); // Set the selected category
  };

  // Function to filter products based on price range and selected category
  const filteredProducts = () => {
    return Object.keys(products).flatMap((category) => {
      // If a category is selected, filter only the products in that category
      if (selectedCategory && selectedCategory !== category) return [];

      // Filter products by price range
      return products[category].filter((item) => {
        return item.price >= priceRange[0] && item.price <= priceRange[1];
      }).map(item => ({ ...item, category })); // Include category in filtered items
    });
  };

  // Handle price range changes
  const handlePriceRangeChange = (values) => {
    setPriceRange(values); // Update the price range state
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success('Product added to cart successfully!');
  };


  return (
    <div>
      <MenuHeader />
      <ShopHeader categories={categories} onCategorySelect={handleCategorySelect}/>
      <BannerSlider />
      <Subcat/>

      {/* Price Range Filter Slider */}
      <div className="container mx-auto w-[500px] p-4 mb-4">
        <h2 className="text-xl font-bold text-center">Filter by Price Range</h2>

        <div className="flex flex-col items-center space-y-4">
          {/* Slider */}
          <Range
            step={100}
            min={minPrice}
            max={maxPrice}
            values={priceRange}
            onChange={handlePriceRangeChange}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  height: '6px',
                  background: '#ddd',
                  borderRadius: '5px',
                  width: '100%',
                  marginTop: '30px', // Ensure the track is full width
                  position: 'relative',
                }}
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
<div
      {...props}
      style={{
        height: '24px',
        width: '24px',
        backgroundColor: '#fff',
        border: '2px solid red',
        borderRadius: '50%',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        position: 'absolute',  // Absolute positioning relative to the track
        top: '10%',            // Center the thumb vertically
        transform: 'translateY(-50%)', // Center the thumb vertically
      }}
    />
            )}
          />

          {/* Display selected price range */}
          <div className="flex justify-between w-full mt-4">
            <span>LKR {priceRange[0]}</span>
            <span>LKR {priceRange[1]}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-6 w-[1600px] ml-10  gap-4 mb-10">
        {filteredProducts().map((product) => (
          <div key={product.id} className="border shadow-lg rounded-lg p-4">
            <img
              src={product.productImageUrls[0]}
              alt={product.productName}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-sm ml-7 font-poppins font-semibold">{product.productName}</h3>
            <p className="text-red-500 ml-20 font-poppins opacity-30 font-bold">LKR {product.price}</p>
            <button className="bg-red font-poppins  ml-12 flex justify-between gap-3 text-white px-4 py-2 mt-2 rounded hover:bg-red-600"
             onClick={() => handleAddToCart(product)}
             >
              
              Add to Cart<FaShoppingCart className='mt-1' />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemShop;
