import React from "react";
import "./blogsection.scss";

const BlogSection = () => {
  return (
    <section className="hero-sections">
      <div className="hero-background">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                Empowering retailers with unbeatable wholesale prices and fast,
                reliable delivery.
              </h1>
              <p>
                Discover top-quality products sourced directly from trusted
                manufacturers. Simplify your bulk buying experience with our
                seamless ordering and support.
              </p>
              <div className="cta-section">
                <button className="cta-button primary">Get Started</button>
                <button className="cta-button secondary">Learn More</button>
              </div>
            </div>
            <div className="hero-image">
              <div className="globe-container">
                <div className="globe">
                  <div className="network-nodes">
                    <div className="node node-1"></div>
                    <div className="node node-2"></div>
                    <div className="node node-3"></div>
                    <div className="node node-4"></div>
                    <div className="node node-5"></div>
                  </div>
                  <div className="network-connections">
                    <div className="connection connection-1"></div>
                    <div className="connection connection-2"></div>
                    <div className="connection connection-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
