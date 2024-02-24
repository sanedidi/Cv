import React from "react";
import axios from "axios";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import toast from "react-hot-toast";
import { useState } from "react";
import "./Hero.scss";
const Hero = () => {
  const [showNewLatter, setShowNewLatter] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleCooperationClick = () => {
    setShowNewLatter(true);
  };

  const handleCloseNewLatter = () => {
    setShowNewLatter(false);
    setMenuOpen(false);
  };

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Info, setInfo] = useState("");
  const token = "6880561135:AAFx5dueOLFWiJYs_cT1F7--vVx4DnGE6_E";
  const chat_id = "-4147114114";
  const apiUrl = "https://api.telegram.org/bot" + token + "/sendMessage";

  const sendMessage = (text) => {
    axios.get(apiUrl, {
      params: {
        chat_id: chat_id,
        text: text,
      },
    });
  };
  // const notify = () => toast("Enter Your Details.");
  const notify = () =>
    toast("Enter Your Details", {
      duration: 2000,
      position: "top-right",
    });
  const subscribeHandler = (e) => {
    e.preventDefault();

    // Check if both name and phoneNumber are not empty
    if (name.trim() !== "" && phoneNumber.trim() !== "" && Info.trim() !== "") {
      sendMessage(`Name: ${name}\nPhone Number: ${phoneNumber}\nInfo: ${Info}`);
      // Clear input values
      setName("");
      setPhoneNumber("");
      setInfo("");
      // Additional actions upon subscription, if needed
    }
  };
  const [isOpen1, setIsOpen1] = React.useState(false);
  const toggleDrawer1 = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="bat"></div>
          <div className="hero__bur">
            <button
              className="hero__btn"
              onClick={() => {
                toggleDrawer(), notify();
              }}
            >
              {" "}
              Press Here!
            </button>
            
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="top"
              className="bla bla bla"
            >
              <div className="hero__gg">
                <h2 className="hero__title">Need A Cool Site?</h2>
                <h2 className="hero__title">Leave A Request</h2>
              </div>
              <div className="hero__form">
                <form onSubmit={subscribeHandler}>
                  <input
                    className="req__text name"
                    type="text"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="tel"
                    className="req__text tel"
                    placeholder=" Enter Your Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />{" "}
                  <input
                    type="text"
                    className="req__text info"
                    placeholder="What Site Do You Want?"
                    value={Info}
                    onChange={(e) => setInfo(e.target.value)}
                  />{" "}
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
