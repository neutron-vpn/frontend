import React from "react"
import "../index.css"

export default function Navbar() {
    return (
        <>
          <div className="div">
            <div className="div-2">
              <picture>
                <source
                  
                  type="image/webp"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fff58b0e628c9497cabc12847b4e6768f"
    
                  className="image"
                />
              </picture>
              <div className="builder-image-sizer image-sizer" />
            </div>
            <a href="/" className="div-3">Home</a>
            <a href="/pages/agreement" className="div-4">Agreement</a>
            <div className="div-6">|</div>
            <a href="/pages/faq" className="div-7">FAQ</a>
            <a href="/login" className="div-9">Login</a>
          </div>
          <style>{`
            .div {
              display: flex;
              padding-top: 21px;
              padding-left: 150px;
              flex-direction: row;
              max-width: 942px;
              justify-content: flex-start;
            }
            .div-2 {
              display: flex;
              position: relative;
              min-width: 20px;
              min-height: 20px;
              max-width: 205px;
              width: 205px;
            }
            .image {
              object-fit: cover;
              object-position: center;
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0;
              left: 0;
            }
            .image-sizer {
              width: 100%;
              padding-top: 62.4390243902439%;
              pointer-events: none;
              font-size: 0;
            }
            .div-3 {
              max-width: 60px;
              margin-left: 41px;
              color: rgba(0, 0, 0, 1);
              font-size: 25px;
              letter-spacing: 0%;
              text-align: left;
              font-family: JetBrains Mono, monospace;
              margin-top: auto;
              margin-bottom: auto;
            }
            .div-4 {
              max-width: 105px;
              margin-left: 41px;
              color: rgba(0, 0, 0, 1);
              font-size: 25px;
              letter-spacing: 0%;
              text-align: left;
              font-family: JetBrains Mono, monospace;
              margin-top: auto;
              margin-bottom: auto;
            }
            .div-5 {
              max-width: 60px;
              margin-left: 41px;
              color: rgba(0, 0, 0, 1);
              font-size: 25px;
              letter-spacing: 0%;
              text-align: left;
              font-family: JetBrains Mono, monospace;
              margin-top: auto;
              margin-bottom: auto;
            }
            .div-6 {
              max-width: 15px;
              margin-left: 41px;
              color: rgba(0, 0, 0, 1);
              font-size: 25px;
              letter-spacing: 0%;
              text-align: left;
              font-family: JetBrains Mono, monospace;
              margin-top: auto;
              margin-bottom: auto;
            }
            .div-7 {
              max-width: 45px;
              margin-left: 41px;
              color: rgba(0, 0, 0, 1);
              font-size: 25px;
              letter-spacing: 0%;
              text-align: left;
              font-family: JetBrains Mono, monospace;
              margin-top: auto;
              margin-bottom: auto;
            }
            .div-8 {
              max-width: 90px;
              margin-left: 41px;
              color: rgba(0, 0, 0, 1);
              font-size: 25px;
              letter-spacing: 0%;
              text-align: left;
              font-family: JetBrains Mono, monospace;
              margin-top: auto;
              margin-bottom: auto;
            }
            .div-9 {
              max-width: 75px;
              margin-left: 41px;
              color: rgba(139, 158, 112, 1);
              font-size: 25px;
              letter-spacing: 0%;
              text-align: left;
              font-family: JetBrains Mono, monospace;
              margin-top: auto;
              margin-bottom: auto;
            }
          `}</style>
        </>
      );
    
  }
  