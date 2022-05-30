export default function Homepage() {
  return (
    <>
      <div className="homepage-1">
        <div className="homepage-1-text1">Free VPN<br/> service</div>
        <div className="description">
          Based on Wireguard. Completely free. Accessible for everyone.
        </div>
      </div>
      <style>{`
        .homepage-1 {
          margin-left: 700px;
          display: flex;
          margin-top: 50px;
          flex-direction: column;
          max-width: 766px;
          justify-content: flex-start;
          background-color: rgba(255, 255, 255, 1);
        }
        .homepage-1-text1 {
          max-width: 519px;
          color: rgba(0, 0, 0, 1);
          font-size: 54px;
          letter-spacing: 0%;
          text-align: left;
          font-weight: 700;
          font-family: JetBrains Mono, sans-serif;
        }
        .description {
          max-width: 360px;
          color: rgba(0, 0, 0, 1);
          font-size: 20px;
          letter-spacing: 0%;
          text-align: left;
          font-family: JetBrains Mono, sans-serif;
          font-weight: 300;
          margin-top: 13px;
        }
      `}</style>
    </>
  );
} 
