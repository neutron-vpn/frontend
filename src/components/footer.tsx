import "../index.css"
export default function Footer() {
  return (
    <>
      <div className="footer">
        <p className="footer-2">© 2022 Neutron Project</p>
      </div>
      <style>{`
        .footer-2 {
          display: flex;
          justify-content: center;
          position: fixed;
          bottom: 0;
          width: 100%;
        }
        .footer-2 {
          color: rgba(0, 0, 0, 1);
          font-size: 12px;
          margin-bottom: 35px;
          letter-spacing: 0%;
          text-align: left;
          font-family: JetBrains Mono, sans-serif;
        }
      `}</style>
    </>
  );
    
  }
  
