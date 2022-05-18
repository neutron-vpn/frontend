export default function Homepage() {
    return (
      <>
        <div className="div-1-03">
          <div className="div-2-03">The free VPN service.</div>
          <div className="based-on-wireguard-completely">
            Based on Wireguard. Completely free. Unlimited traffic.
          </div>
        </div>
        <style>{`
          .div-1-03 {
            padding-left: 150px;
            padding-top: 21px;
            display: flex;
            flex-direction: column;
            max-width: 432px;
            justify-content: flex-start;
            align-items: flex-end;
          }
          .div-2-03 {
            max-width: 432px;
            color: rgba(0, 0, 0, 1);
            font-size: 60px;
            letter-spacing: 0%;
            text-align: left;
            font-family: JetBrains Mono, monospace;
            font-weight: 900;
          }
          .based-on-wireguard-completely {
            max-width: 432px;
            margin-top: 28px;
            color: rgba(0, 0, 0, 1);
            font-size: 20px;
            letter-spacing: 0%;
            text-align: left;
            font-weight: 300;
            font-family: JetBrains Mono, monospace;
          }
          .div-5-03 {
            max-width: 77px;
            margin-top: 28px;
            color: rgba(255, 255, 255, 1);
            font-size: 16px;
            letter-spacing: 0%;
            text-align: left;
            font-family: JetBrains Mono, monospace;
          }
        `}</style>
      </>
    );
  }