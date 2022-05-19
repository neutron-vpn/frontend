import React from "react"
import "../index.css"

export default function Header() {
  return (
    <>
      <div className="Header-1">
        <div className="header-1-text1">network status:</div>
        <div className="header-1-text2">PARTIAL OUTAGE</div>
      </div>
      <style>{`
        .Header-1 {
          display: flex;
          flex-direction: row;
          max-width: 100%;
          justify-content: flex-start;
          align-items: flex-end;
          padding-top: 8px;
          padding-bottom: 8px;
          padding-right: 25px;
          padding-left: 25px;
          background-color: rgba(0, 0, 0, 1);
        }
        .header-1-text1 {
          max-width: 100%;
          color: rgba(255, 255, 255, 1);
          letter-spacing: 0%;
          text-align: left;
          font-family: JetBrains Mono, sans-serif;
          font-size: 12px;
        }
        .header-1-text2 {
          max-width: 100%;
          margin-left: 3px;
          color: rgba(255, 255, 255, 1);
          letter-spacing: 0%;
          text-align: left;
          font-size: 12px;
          font-family: JetBrains Mono, sans-serif;
        }
      `}</style>
    </>
  );

}