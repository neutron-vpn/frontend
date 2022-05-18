import React from "react"
import "../index.css"

export default function Header() {
  return (
    <>
      <div className="div-1-01">
        <div className="div-2-02">
          <div className="div-3-02">Network status: </div>
          <div className="div-4-02">OK</div>
        </div>
      </div>
      <style>{`
        .div-1-01 {
          display: flex;
          flex-direction: row;
          max-width: 100%;
          justify-content: flex-start;
          align-items: flex-start;
          padding-top: 22px;
          padding-bottom: 22px;
          padding-right: 155px;
          padding-left: 40px;
          background-color: rgba(0, 0, 0, 1);
        }
        .div-2-02 {
          display: flex;
          flex-direction: row;
          max-width: 173px;
          justify-content: flex-start;
          align-items: flex-start;
          padding-top: 10px;
          padding-bottom: 10px;
          padding-right: 10px;
          padding-left: 10px;
        }
        .div-3-02 {
          max-width: 126px;
          color: rgba(178, 177, 177, 1);
          font-size: 14px;
          letter-spacing: 0%;
          text-align: left;
          font-family: JetBrains Mono, monospace;
        }
        .div-4-02 {
          max-width: 17px;
          margin-left: 10px;
          color: rgba(255, 255, 255, 1);
          font-size: 14px;
          letter-spacing: 0%;
          text-align: left;
          font-family: JetBrains Mono, monospace;
        }
      `}</style>
    </>
  );
}