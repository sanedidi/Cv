import React, { useState } from "react";
import axios from "axios";
import Drawer from "react-modern-drawer";
import toast, { Toaster } from "react-hot-toast";
import "react-modern-drawer/dist/index.css";
import "./Hero.scss";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    info: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    // Validate phone number input to allow only numeric characters
    if (name === "phoneNumber") {
      newValue = value.replace(/\D/, ""); // Remove non-numeric characters
      // Display warning message if non-numeric characters are entered
      if (value !== newValue) {
        toast.error("Please enter only numeric characters for the phone number", {
          duration: 2000,
          position: "top-right",
        });
      }
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  const sendMessage = async (text) => {
    // Your sendMessage function remains unchanged
    // Please make sure to include the function here
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phoneNumber, info } = formData;

    if (name.trim() !== "" && phoneNumber.trim() !== "" && info.trim() !== "") {
      await sendMessage(`Name: ${name}\nPhone Number: ${phoneNumber}\nInfo: ${info}`);
      setFormData({
        name: "",
        phoneNumber: "",
        info: "",
      });
    } else {
      toast.error("Please fill in all fields", {
        duration: 2000,
        position: "top-right",
      });
    }
  };

  const toggleDrawer = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    toast.info("Enter Your Details", {
      duration: 2000,
      position: "top-right",
    });
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__bur">
            <button className="hero__btn" onClick={toggleDrawer}>
              You Need A Site?
            </button>
            <Drawer open={isOpen} onClose={toggleDrawer} direction="top" className="bla bla bla">
              <div className="hero__form">
                <form onSubmit={handleSubmit}>
                  <input
                    className="req__text name"
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <input
                    type="tel"
                    className="req__text tel"
                    name="phoneNumber"
                    placeholder="Enter Your Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    className="req__text info"
                    name="info"
                    placeholder="What Site Do You Want?"
                    value={formData.info}
                    onChange={handleInputChange}
                  />
                  <button className="hero__btn" type="submit">
                    Send
                  </button>
                </form>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
