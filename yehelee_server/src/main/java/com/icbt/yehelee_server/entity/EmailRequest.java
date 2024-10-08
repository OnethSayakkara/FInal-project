package com.icbt.yehelee_server.entity;

public class EmailRequest {

    private String to;            // The recipient's email address
    private String fullname;      // The client's full name
    private String responseNote;  // The response note

    // Getters and Setters
    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getResponseNote() {
        return responseNote;
    }

    public void setResponseNote(String responseNote) {
        this.responseNote = responseNote;
    }
}