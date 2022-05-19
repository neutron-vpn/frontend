export default function Homepage() {
  return (
    <>
      <div className="homepage-1">
        <div className="homepage-1-text1"># free VPN service</div>
        <div className="description">
          based on Wireguard. completely free. accessible for everyone.
        </div>
      </div>
      <style>{`
        .homepage-1 {
          margin-left: 150px;
          display: flex;
          flex-direction: column;
          max-width: 766px;
          justify-content: flex-start;
          background-color: rgba(255, 255, 255, 1);
        }
        .homepage-1-text1 {
          max-width: 519px;
          color: rgba(0, 0, 0, 1);
          font-size: 48px;
          letter-spacing: 0%;
          text-align: left;
          font-family: JetBrains Mono, sans-serif;
        }
        .description {
          max-width: 360px;
          color: rgba(0, 0, 0, 1);
          font-size: 20px;
          letter-spacing: 0%;
          text-align: left;
          font-family: JetBrains Mono, sans-serif;
          font-weight: 500;
          margin-top: 13px;
        }
      `}</style>
    </>
  );
      }