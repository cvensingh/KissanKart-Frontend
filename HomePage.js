import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  const navigate = useNavigate(); // Hook for navigation
  const [currentText, setCurrentText] = useState("");
  const [isErasing, setIsErasing] = useState(false);
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state

  const texts = ["Direct from Farm to You", "Shivendra Singh Rana"]; // Headers to animate
  
  const typingSpeed = 100; // Typing speed in milliseconds
  const erasingSpeed = 20; // Erasing speed in milliseconds
  const delayBetweenTexts = 1000; // Delay before switching to next text

  useEffect(() => {
    let timer;

    if (!isErasing && charIndex < texts[index].length) {
      // Typing effect
      timer = setTimeout(() => {
        setCurrentText((prev) => prev + texts[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isErasing && charIndex > 0) {
      // Erasing effect
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, erasingSpeed);
    } else if (!isErasing && charIndex === texts[index].length) {
      // Start erasing after delay
      timer = setTimeout(() => setIsErasing(true), delayBetweenTexts);
    } else if (isErasing && charIndex === 0) {
      // Switch to next text
      setIsErasing(false);
      setIndex((prev) => (prev + 1) % texts.length); // Cycle through texts
    }

    return () => clearTimeout(timer);
  }, [charIndex, isErasing, index, texts]);

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container">
        
          <a className="navbar-brand text-white fw-bold" href="#">
            <img
              src="./images/kisankartLogo.png"
              alt="Logo"
              style={{ width: "40px", marginRight: "10px" }}
            />
            Kisan Kart
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  style={{ cursor: "pointer" }}
                
                  onClick={() => navigate("/MarketPlace")}
                >
                  Marketplace
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/AboutUs")}
                >
                  About Us
                </a>
              </li>
              {/* Dropdown State */}



              <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <a className="nav-link text-white dropdown-toggle" style={{ cursor: "pointer" }}>
                Account & Lists
              </a>
              {isDropdownOpen && (
                <ul className="dropdown-menu show">
                  <li><a className="dropdown-item" href="#">My Account</a></li>
                  <li><a className="dropdown-item" href="#">My Orders</a></li>
                  <li><a className="dropdown-item" href="#">Lists</a></li>
                  <li><a className="dropdown-item" href="#">Review My Purchases</a></li>
                 
                  <li><a className="dropdown-item" href="#">Help & Contact</a></li>
                  
                  <li><a className="dropdown-item" href="#">Gift Card</a></li>
                  
                  <li><a className="dropdown-item text-danger" href="#">LogOut</a></li>
                </ul>
              )}
            </li>
          </ul>
      </div> {/* Dropdown State Till here*/}
        
        <li className="nav-item">
                <a className="nav-link text-white" style={{ cursor: "pointer" }} onClick={() => navigate("/CartPage")}>
                
                  Cart
                </a>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-warning"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              </li>
            
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="hero-section text-center text-white py-5"
        style={{
          backgroundImage: 'url(/images/KisanKartHomePageImage.jpg)', // Image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "60vh", // Full screen height
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
       
        <div className="container">
        <h1 className="display-4 fw-bold"  
        
        style={{
          minHeight: "5rem", // Set a fixed minimum height for the h1
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        
        >{currentText}</h1>

          
          
          <p className="lead fw-bold">Empowering Farmers, Enriching Lives</p>
          
          
          <div className="d-flex justify-content-center gap-3 ">
            <button
              className="btn btn-success btn-lg"
              onClick={() => navigate("/MarketPlace")}
            >
            Marketplace
            </button>
            <button
              className="btn btn-warning btn-lg"
              onClick={() => navigate("/create-account")}
            >
              Register
            </button>
            <button
              className="btn btn-primary btn-lg"
              onClick={() => navigate("/AddProducts")}
            >
              Add Product
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4">
              <div className="feature-card fresh-produce p-4 rounded">
                <h4>Fresh Produce</h4>
                <p>Get fresh, farm-picked products delivered to your doorstep.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card fair-prices p-4 rounded">
                <h4>Fair Prices</h4>
                <p>Direct pricing from farmers to consumers for transparency.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card support-farmers p-4 rounded">
                <h4>Support Farmers</h4>
                <p>Contribute to rural communities and empower local farmers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>&copy; 2024 KisanKart. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
