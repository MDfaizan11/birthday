import { useState, useEffect } from "react";
import "./birthdaypage.css";

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

  // Birthday-themed images
  const birthdayImages = [
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=400&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1555507036-ab794f4afe5a?w=400&h=400&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=400&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=400&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1607344645866-009c7d7496df?w=400&h=400&fit=crop&crop=center",
  ];

  const birthdayVideos = [
    "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4",
  ];

  const birthdayLetter = `My Dearest Billu,

Today is YOUR special day - the day we celebrate the incredible person you are!

Another year of your amazing journey around the sun, and what a beautiful journey it has been. You light up every room you enter and bring joy to everyone around you.

I'm so grateful to have you in my life. Your laughter is contagious, your kindness is inspiring, and your friendship means the world to me.

On your birthday, I want you to know how truly special you are. You deserve all the happiness, all the love, and all the wonderful surprises that life has to offer.

I hope this birthday is filled with everything that makes you smile - delicious cake, amazing surprises, and moments that become treasured memories.

Here's to celebrating YOU today and always!

Happy Birthday, wonderful Billu! 🎂

With love and endless birthday wishes,
Your Biggest Fan 💕`;

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

  return (
    <div className="birthday-app">
      {/* Confetti Animation */}
      {confettiActive && (
        <div className="confetti-container">
          {[...Array(30)].map((_, i) => (
            <div key={i} className={`confetti confetti-${(i % 6) + 1}`}></div>
          ))}
        </div>
      )}

      {/* Background Elements */}
      <div className="bg-elements">
        <div className="floating-shapes">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`shape shape-${(i % 3) + 1}`}></div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="header">
          <div className="birthday-crown">👑</div>
          <h1 className="main-title">
            <span className="title-happy">Happy Birthday</span>
            <span className="title-name">BILLU</span>
          </h1>
          <p className="subtitle">🎉 Your special day is here! 🎉</p>
        </header>

        {/* Birthday Cake Section */}
        <section className="cake-section">
          <div className="cake-container" onClick={blowCandles}>
            <div className="simple-cake">
              <div className="cake-layer cake-bottom"></div>
              <div className="cake-layer cake-middle"></div>
              <div className="cake-layer cake-top"></div>
              <div className="candles">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="candle">
                    <div className="candle-stick"></div>
                    <div className={`flame ${cakeLit ? "lit" : "out"}`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="cake-text">🕯️ Tap the cake to make a wish!</p>
        </section>

        {/* Action Cards */}
        <section className="cards-section">
          <div className="cards-grid">
            <div
              className="action-card letter-card"
              onClick={() => setShowLetter(true)}
            >
              <div className="card-icon">💌</div>
              <h3 className="card-title">Love Letter</h3>
              <p className="card-desc">Read your special message</p>
            </div>

            <div
              className="action-card photo-card"
              onClick={() => setShowGallery(true)}
            >
              <div className="card-icon">📸</div>
              <h3 className="card-title">Photo Gallery</h3>
              <p className="card-desc">View birthday memories</p>
            </div>

            <div
              className="action-card video-card"
              onClick={() => setShowVideoGallery(true)}
            >
              <div className="card-icon">🎬</div>
              <h3 className="card-title">Video Gallery</h3>
              <p className="card-desc">Watch special moments</p>
            </div>
          </div>
        </section>

        {/* Slider Section */}
        <section className="slider-section">
          <div className="slider-header">
            <h3>🎁 Unlock Your Surprise</h3>
            <div className="progress-indicator">{rangeValue}%</div>
          </div>
          <div className="slider-wrapper">
            <input
              type="range"
              min="0"
              max="100"
              value={rangeValue}
              onChange={handleRangeChange}
              className="birthday-slider"
            />
            <div className="slider-track">
              <div
                className="slider-progress"
                style={{ width: `${rangeValue}%` }}
              ></div>
            </div>
          </div>
          {rangeValue < 100 && (
            <p className="slider-hint">👆 Slide to 100% for a big surprise!</p>
          )}
        </section>

        {/* Gift Box */}
        <section className="gift-section">
          <div className={`gift-box ${isBoxOpen ? "opened" : ""}`}>
            <div className="box-lid">
              <div className="lid-decoration">🎀</div>
            </div>
            <div className="box-body"></div>
            {isBoxOpen && (
              <div className="surprise-content">
                <div className="surprise-text">🎉 SURPRISE! 🎉</div>
                <div className="mini-gallery">
                  {birthdayImages.slice(0, 4).map((img, index) => (
                    <div key={index} className="mini-photo">
                      <img
                        src={img || "/placeholder.svg"}
                        alt={`Surprise ${index + 1}`}
                        onError={handleImageError}
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
        <div className="modal-backdrop" onClick={() => setShowLetter(false)}>
          <div
            className="modal letter-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>💌 Special Letter</h2>
              <button
                className="close-button"
                onClick={() => setShowLetter(false)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
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
        <div className="modal-backdrop" onClick={() => setShowGallery(false)}>
          <div
            className="modal gallery-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>📸 Photo Gallery</h2>
              <button
                className="close-button"
                onClick={() => setShowGallery(false)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <div className="photo-grid">
                {birthdayImages.map((img, index) => (
                  <div key={index} className="photo-item">
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`Memory ${index + 1}`}
                      onError={handleImageError}
                    />
                    <div className="photo-overlay">
                      <span>Memory {index + 1}</span>
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
          className="modal-backdrop"
          onClick={() => setShowVideoGallery(false)}
        >
          <div
            className="modal video-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>🎬 Video Gallery</h2>
              <button
                className="close-button"
                onClick={() => setShowVideoGallery(false)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
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
                    <div className="video-info">
                      <h4>Birthday Video {index + 1}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Celebration Popup */}
      {showPopup && (
        <div
          className="modal-backdrop celebration-backdrop"
          onClick={closePopup}
        >
          <div
            className="modal celebration-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>🎉 HAPPY BIRTHDAY! 🎉</h2>
              <button className="close-button" onClick={closePopup}>
                ✕
              </button>
            </div>
            <div className="modal-body">
              <div className="celebration-content">
                <h3>🌟 Amazing Billu! 🌟</h3>
                <p>
                  Hope your birthday is filled with joy and wonderful surprises!
                </p>
                <div className="celebration-gallery">
                  {birthdayImages.map((img, index) => (
                    <div
                      key={index}
                      className={`celebration-photo ${
                        animateImages ? "animate" : ""
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
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
    </div>
  );
}
