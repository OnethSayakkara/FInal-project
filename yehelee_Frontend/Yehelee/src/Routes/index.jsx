import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Appoinment from "../sections/Appoinment"
import ShopYehelee from "../sections/ShopYehelee";
import PaymentForm from "../components/PaymentForm";
import Login from "../sections/Login";
import Register from "../sections/Register";
import SuccessPage from "../sections/SuccessPage";
import Cart from "../components/Cart";
import { CartProvider } from "../components/CartContext";

const router = createBrowserRouter([  

     {
        path : "/",
        element :<App/>
     },{
        path : "appoinment",
        element :<Appoinment/>

      },{
      path : "paymentform",
      element : <PaymentForm/>
   },{
      path : "login",
      element : <Login/>
   },{
      path : "register",
      element: <Register/>
   },{

      path: "success",
      element: <SuccessPage/>
   },{
      path : "shop",
      element : <ShopYehelee/>,
   },{
            path : "cart",
            element :( 
            <CartProvider>
            <Cart/> 
            </CartProvider>)
         }

      
   
   




])


export default router;