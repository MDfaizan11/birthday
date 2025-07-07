"use client";
import { useState, useEffect } from "react";
import "./birthdaypage.css";
import img1 from "../src/images/Screenshot_20250707_165947.jpg";
import img2 from "../src/images/Screenshot_20250707_170002.jpg";
import img3 from "./images/Screenshot_20250707_170018.jpg";
import img4 from "../src/images/Screenshot_20250707_170034.jpg";
import img5 from "../src/images/Screenshot_20250707_170044.jpg";
import img6 from "../src/images/Screenshot_20250707_170057.jpg";
import img7 from "../src/images/Screenshot_20250707_170107.jpg";
import img8 from "../src/images/Screenshot_20250707_170114.jpg";
import img9 from "../src/images/Screenshot_20250707_170121.jpg";
import img10 from "../src/images/Screenshot_20250707_172022.jpg";
import img11 from "../src/images/Screenshot_20250707_172042.jpg";
import img12 from "../src/images/Screenshot_20250707_172131.jpg";
import img13 from "../src/images/Screenshot_20250707_172136.jpg";
import img14 from "../src/images/Screenshot_20250707_172225.jpg";
import img15 from "../src/images/Screenshot_20250707_172246.jpg";
import img16 from "../src/images/Screenshot_20250707_172436.jpg";
import img17 from "../src/images/Screenshot_20250707_172225.jpg";
import img18 from "../src/images/Screenshot_20250707_172246.jpg";
import img19 from "../src/images/Screenshot_20250707_172436.jpg";
import img20 from "../src/images/Screenshot_20250707_172502.jpg";
import img21 from "../src/images/Screenshot_20250707_172541.jpg";
import img22 from "../src/images/Screenshot_20250707_172700.jpg";
import img23 from "../src/images/Screenshot_20250707_172732.jpg";

import v2 from "../src/Video/_faizan_811-13-02-2023-0017.mp4";
import v3 from "../src/Video/ishikahukum-19072022-0001.mp4";
import v4 from "../src/Video/Snapchat-216865904.mp4";
import v5 from "../src/Video/VID_80470511_102554_778.mp4";
import v6 from "../src/Video/video_20220901_094530.mp4";
import v7 from "../src/Video/video_20230227_212837_edit.mp4";

export default function BirthdayPage() {
  const [rangeValue, setRangeValue] = useState(0);
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [animateImages, setAnimateImages] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [showVideoGallery, setShowVideoGallery] = useState(false);
  const [cakeLit, setCakeLit] = useState(true);
  const [confettiActive, setConfettiActive] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const birthdayImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
  ];

  const birthdayVideos = [v2, v3, v4, v5, v6, v7];

  const birthdayLetter = `My Dearest Billu,

Hamesha Jaha bhi Raho khus Rahna Billu , Hamesha Kamiyab Raho meri dua hai tumhe ,tujhe duniya ki saari khushiya mile pagal tu Hamesha khus raho 
i love you Billy 
Happy Birthday, beautiful Life Partner! 🌟
With endless love and warmest wishes,
Once again happy birthday Billu 
Forever Love You Pgl Avrt 
✨`;

  useEffect(() => {
    if (rangeValue >= 100) {
      setTimeout(() => {
        setIsBoxOpen(true);
        setConfettiActive(true);
        setTimeout(() => {
          setShowPopup(true);
          setAnimateImages(true);
        }, 800);
      }, 500);
    } else {
      setIsBoxOpen(false);
      setShowPopup(false);
      setAnimateImages(false);
      setConfettiActive(false);
    }
  }, [rangeValue]);

  const handleRangeChange = (e) => {
    setRangeValue(e.target.value);
  };

  const closePopup = () => {
    setShowPopup(false);
    setAnimateImages(false);
    setIsBoxOpen(false);
    setRangeValue(0);
    setConfettiActive(false);
  };

  const blowCandles = () => {
    setCakeLit(false);
    setConfettiActive(true);
    setTimeout(() => {
      setCakeLit(true);
      setConfettiActive(false);
    }, 3000);
  };

  const handleImageError = (e) => {
    e.target.style.display = "none";
  };

  const openFullScreenImage = (imageUrl, index) => {
    setFullScreenImage(imageUrl);
    setCurrentImageIndex(index);
  };

  const closeFullScreenImage = () => {
    setFullScreenImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex =
      direction === "next"
        ? (currentImageIndex + 1) % birthdayImages.length
        : (currentImageIndex - 1 + birthdayImages.length) %
          birthdayImages.length;

    setCurrentImageIndex(newIndex);
    setFullScreenImage(birthdayImages[newIndex]);
  };

  return (
    <div className="birthday-app">
      {/* Confetti Animation */}
      {confettiActive && (
        <div className="confetti-container">
          {[...Array(60)].map((_, i) => (
            <div key={i} className={`confetti confetti-${(i % 8) + 1}`}></div>
          ))}
        </div>
      )}

      {/* Background */}
      <div className="background">
        <div className="bg-gradient"></div>
        <div className="floating-elements">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`floating-element element-${i + 1}`}></div>
          ))}
        </div>
      </div>

      {/* Main Container */}
      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <div className="crown-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm2.7-2h8.6l.9-5.4-2.1 1.8L12 8l-3.1 2.4-2.1-1.8L7.7 14z" />
              </svg>
            </div>
            <h1 className="hero-title">
              <span className="title-line-1">Happy Birthday</span>
              <span className="title-line-2">BILLU</span>
            </h1>
            <p className="hero-subtitle">Celebrate Your Day Billu </p>
            <div className="hero-decoration">
              <div className="sparkle"></div>
              <div className="sparkle"></div>
              <div className="sparkle"></div>
            </div>
          </div>
        </section>

        {/* Cake Section */}
        <section className="cake-section">
          <div className="cake-container" onClick={blowCandles}>
            <div className="cake">
              <div className="cake-base">
                <div className="cake-layer layer-1"></div>
                <div className="cake-layer layer-2"></div>
                <div className="cake-layer layer-3"></div>
              </div>
              <div className="candles-container">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="candle">
                    <div className="candle-body"></div>
                    <div
                      className={`flame ${cakeLit ? "burning" : "out"}`}
                    ></div>
                  </div>
                ))}
              </div>
              <div className="cake-decoration">
                <div className="cherry"></div>
              </div>
            </div>
          </div>
          <p className="cake-instruction">Click the cake to make a wish</p>
        </section>

        {/* Features Grid */}
        <section className="features">
          <div className="features-grid">
            <div className="feature-card" onClick={() => setShowLetter(true)}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <h3 className="feature-title"> Letter</h3>
              <p className="feature-description">
                A heartfelt message just for you
              </p>
            </div>

            <div className="feature-card" onClick={() => setShowGallery(true)}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                </svg>
              </div>
              <h3 className="feature-title">Photo Gallery</h3>
              <p className="feature-description"> Faiish Beautiful memories </p>
            </div>

            <div
              className="feature-card"
              onClick={() => setShowVideoGallery(true)}
            >
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                </svg>
              </div>
              <h3 className="feature-title">Video Gallery</h3>
              <p className="feature-description">Special moments in motion</p>
            </div>
          </div>
        </section>

        {/* Surprise Slider */}
        <section className="surprise-section">
          <div className="surprise-card">
            <div className="surprise-header">
              <h3 className="surprise-title">Unlock Your Surprise</h3>
              <div className="progress-circle">
                <svg className="progress-svg" viewBox="0 0 100 100">
                  <circle
                    className="progress-bg"
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="8"
                  />
                  <circle
                    className="progress-bar"
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${rangeValue * 2.83} 283`}
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="progress-text">{rangeValue}%</div>
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#667eea" />
                    <stop offset="100%" stopColor="#764ba2" />
                  </linearGradient>
                </defs>
              </div>
            </div>
            <div className="slider-container">
              <input
                type="range"
                min="0"
                max="100"
                value={rangeValue}
                onChange={handleRangeChange}
                className="slider"
              />
              <div className="slider-track">
                <div
                  className="slider-fill"
                  style={{ width: `${rangeValue}%` }}
                ></div>
              </div>
            </div>
            {rangeValue < 100 && (
              <p className="slider-hint">
                Slide to reveal your magical surprise
              </p>
            )}
          </div>
        </section>

        {/* Gift Box */}
        <section className="gift-section">
          <div className={`gift-box ${isBoxOpen ? "opened" : ""}`}>
            <div className="gift-lid">
              <div className="ribbon"></div>
            </div>
            <div className="gift-body"></div>
            {isBoxOpen && (
              <div className="surprise-reveal">
                <div className="surprise-title">✨ Surprise! ✨</div>
                <div className="surprise-gallery">
                  {birthdayImages.slice(0, 4).map((img, index) => (
                    <div key={index} className="surprise-image">
                      <img
                        src={img || "/placeholder.svg"}
                        alt={`Surprise ${index + 1}`}
                        onError={handleImageError}
                        onClick={() => openFullScreenImage(img, index)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Letter Modal */}
      {showLetter && (
        <div className="modal-overlay" onClick={() => setShowLetter(false)}>
          <div
            className="modal letter-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>💌 A Special Letter</h2>
              <button
                className="modal-close"
                onClick={() => setShowLetter(false)}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
            </div>
            <div className="modal-content">
              <div className="letter-content">
                {birthdayLetter.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Photo Gallery Modal */}
      {showGallery && (
        <div className="modal-overlay" onClick={() => setShowGallery(false)}>
          <div
            className="modal gallery-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>📸 Photo Gallery</h2>
              <button
                className="modal-close"
                onClick={() => setShowGallery(false)}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
            </div>
            <div className="modal-content">
              <div className="gallery-grid">
                {birthdayImages.map((img, index) => (
                  <div
                    key={index}
                    className="gallery-item"
                    onClick={() => openFullScreenImage(img, index)}
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`Memory ${index + 1}`}
                      onError={handleImageError}
                    />
                    <div className="gallery-overlay">
                      <div className="gallery-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Gallery Modal */}
      {showVideoGallery && (
        <div
          className="modal-overlay"
          onClick={() => setShowVideoGallery(false)}
        >
          <div
            className="modal video-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>🎬 Video Gallery</h2>
              <button
                className="modal-close"
                onClick={() => setShowVideoGallery(false)}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
            </div>
            <div className="modal-content">
              <div className="video-grid">
                {birthdayVideos.map((video, index) => (
                  <div key={index} className="video-item">
                    <video
                      controls
                      poster="/placeholder.svg?height=200&width=300"
                    >
                      <source src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Celebration Modal */}
      {showPopup && (
        <div className="modal-overlay celebration-overlay" onClick={closePopup}>
          <div
            className="modal celebration-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>🎉 Happy Birthday! 🎉</h2>
              <button className="modal-close" onClick={closePopup}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
            </div>
            <div className="modal-content">
              <div className="celebration-content">
                <h3>🌟 Billu! 🌟</h3>
                <p>
                  Hamesha Khus Rahna Billu Hamesha Haste Hue Rahna Pagal Avrt.
                </p>
                <div className="celebration-grid">
                  {birthdayImages.map((img, index) => (
                    <div
                      key={index}
                      className={`celebration-item ${
                        animateImages ? "animate" : ""
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={() => openFullScreenImage(img, index)}
                    >
                      <img
                        src={img || "/placeholder.svg"}
                        alt={`Celebration ${index + 1}`}
                        onError={handleImageError}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full Screen Image Modal */}
      {fullScreenImage && (
        <div className="fullscreen-overlay" onClick={closeFullScreenImage}>
          <div className="fullscreen-modal">
            <button className="fullscreen-close" onClick={closeFullScreenImage}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
            <button
              className="nav-btn nav-prev"
              onClick={() => navigateImage("prev")}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>
            <button
              className="nav-btn nav-next"
              onClick={() => navigateImage("next")}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </button>
            <div className="fullscreen-content">
              <img
                src={fullScreenImage || "/placeholder.svg"}
                alt="Full screen view"
                className="fullscreen-image"
                onError={handleImageError}
              />
              <div className="image-info">
                {currentImageIndex + 1} / {birthdayImages.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
