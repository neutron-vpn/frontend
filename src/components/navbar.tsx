import "../index.css"
import { ReactComponent as LogoSVG } from "../logo.svg"

export default function Navbar() {
  return (
    <>
      <div className="navbar-2-2">
        <a href="/"><LogoSVG className="logo" /></a>
        <div className="builder-image-sizer image-sizer" />
      </div>
      <div className="navbar">
        <a href="/pages/team" className="navbar-2">Team</a>
        <a href="/pages/privacy" className="navbar-3">Privacy</a>
        <div className="navbar-5">|</div>
        <a href="/pages/faq" className="navbar-6">FAQ</a>
        <a href="https://github.com/neutron-vpn" className="navbar-7">GitHub</a>
        <a href="/login" className="navbar-8">Login</a>
      </div>
      <style>{`
        .navbar {
          text-decoration: none; 
          margin-top: 60px;
          margin-left: 210px;
          display: flex;
          flex-direction: row;
          max-width: 626px;
          justify-content: flex-start;
          align-items: flex-start;
        }
        .navbar-2-2 {
          display: flex;
          position: relative;
          min-width: 20px;
          min-height: 20px;
          max-width: 205px;
          width: 205px;
        }
        .navbar-2 {
          display: flex;
          text-decoration: none;
          flex-direction: row;
          max-width: 48px;
          justify-content: flex-start;
          align-items: flex-start;
          padding-top: 10px;
          padding-bottom: 10px;
          padding-right: 10px;
          padding-left: 10px;
          color: rgba(0, 0, 0, 1);
          font-size: 20px;
          letter-spacing: 0%;
          text-align: left;
          font-family: JetBrains Mono, sans-serif;
        }
        .navbar-3 {
          display: flex;
          text-decoration: none;
          flex-direction: row;
          max-width: 84px;
          justify-content: flex-start;
          align-items: flex-start;
          margin-left: 21px;
          padding-top: 10px;
          padding-bottom: 10px;
          padding-right: 10px;
          padding-left: 10px;
          color: rgba(0, 0, 0, 1);
          font-size: 20px;
          letter-spacing: 0%;
          text-align: left;
          font-family: JetBrains Mono, sans-serif;
        }
        .navbar-4 {
          display: flex;
          flex-direction: row;
          max-width: 48px;
          text-decoration: none;
          justify-content: flex-start;
          align-items: flex-start;
          margin-left: 21px;
          padding-top: 10px;
          padding-bottom: 10px;
          padding-right: 10px;
          padding-left: 10px;
          color: rgba(0, 0, 0, 1);
          font-size: 20px;
          letter-spacing: 0%;
          text-align: left;
          font-family: JetBrains Mono, sans-serif;
        }
        .navbar-5 {
          display: flex;
          text-decoration: none;
          flex-direction: column;
          max-width: 12px;
          justify-content: flex-start;
          align-items: flex-start;
          margin-left: 21px;
          padding-top: 10px;
          padding-bottom: 10px;
          padding-right: 10px;
          padding-left: 10px;
          color: rgba(0, 0, 0, 1);
          font-size: 20px;
          letter-spacing: 0%;
          text-align: left;
          font-family: JetBrains Mono, sans-serif;
        }
        .navbar-6 {
          display: flex;
          flex-direction: row;
          max-width: 36px;
          text-decoration: none;
          justify-content: flex-start;
          align-items: flex-start;
          margin-left: 21px;
          padding-top: 10px;
          padding-bottom: 10px;
          padding-right: 10px;
          padding-left: 10px;
          color: rgba(0, 0, 0, 1);
          font-size: 20px;
          letter-spacing: 0%;
          text-align: left;
          font-family: JetBrains Mono, sans-serif;
        }
        .navbar-7 {
          display: flex;
          text-decoration: none;
          flex-direction: row;
          max-width: 72px;
          justify-content: flex-start;
          align-items: flex-start;
          margin-left: 21px;
          padding-top: 10px;
          padding-bottom: 10px;
          padding-right: 10px;
          padding-left: 10px;
          color: rgba(0, 0, 0, 1);
          font-size: 20px;
          letter-spacing: 0%;
          text-align: left;
          font-family: JetBrains Mono, sans-serif;
        }
        .navbar-8 {
          display: flex;
          flex-direction: row;
          max-width: 60px;
          text-decoration: none;
          justify-content: flex-start;
          align-items: flex-start;
          margin-left: 21px;
          padding-top: 10px;
          padding-bottom: 10px;
          padding-right: 10px;
          padding-left: 10px;
          color: rgba(139, 158, 112, 1);
          font-size: 20px;
          letter-spacing: 0%;
          text-align: left;
          font-family: JetBrains Mono, sans-serif;
        }
        .logo {
          margin-left: 60px;
          margin-top: 60px;
          object-fit: cover;
          object-position: center;
          position: absolute;
          top: 0;
          left: 0;
        }
      `}</style>
    </>
  );
    
  }
  
