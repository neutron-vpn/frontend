import fetch from 'node-fetch';
import { useState } from 'react';
export default function Login() {
    const [password, setPassword] = useState('')
    return (
      <>
        <div className="div-1-03">
          <div className="div-2-03">Log In (registering is not implemented at full, it just sends you to API)</div>
        </div>
        <div className="div-3-03">
          <form>
              <label>
                <p className="div-4-03">Token:</p>
                <input onChange={event => setPassword(event.target.value)} type="password" className="div-5-03"/>
              </label>
              <div>
                <a type="submit" className="div-6-03">Log In</a>
                <a type="submit" className="div-7-03">Create New Account</a>
              </div>
            </form>
          </div>
        <style>{`
          .div-1-03 {
            padding-top: 21px;
            display: flex;
            flex-direction: column;
            max-width: 100%;
            justify-content: flex-start;
            align-items: flex-end;
            padding-left: 1000px;
          }
          .div-2-03 {
            max-width: 100%;
            width: 100%;
            color: rgba(0, 0, 0, 1);
            font-size: 60px;
            letter-spacing: 5%;
            margin-left: 30px;
            text-align: left;
            font-family: JetBrains Mono, monospace;
            font-weight: 700;
          }
          .div-3-03 {
            max-width: 100%;
            width: 100%;
            color: rgba(0, 0, 0, 1);
            font-size: 12px;
            margin-top: 60px;
            height: 100%;
            letter-spacing: 5%;
            margin-left: -200px;
            text-align: left;
            font-family: FiraCode, monospace;
            font-weight: 300;
            font-size: 14px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .div-4-03 {
            max-width: 100%;
            width: 100%;
            color: #222226;
            font-size: 12px;
            margin-top: 60px;
            height: 100%;
            letter-spacing: 5%;
            text-align: left;
            margin-left: -37px;
            font-family: JetBrains Mono, monospace;
            font-weight: 400;
            font-size: 18px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .div-5-03 {
            border: 1px double black;
            max-width: 100%;
            width: 100%;
            color: #222226;
            font-size: 12px;
            margin-top: -15px;
            height: 40px;
            letter-spacing: 5%;
            text-align: left;
            margin-left: 110px;
            font-family: JetBrains Mono, monospace;
            font-weight: 400;
            font-size: 18px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .div-6-03 {
            padding: 0;
            border: none;
            background: none;
            max-width: 100%;
            width: 100%;
            font-size: 12px;
            margin-top: 40px;
            height: 40px;
            letter-spacing: 5%;
            text-align: center;
            margin-left: 110px;
            font-family: JetBrains Mono, monospace;
            font-weight: 600;
            font-size: 18px;
            color: #ffffff;
            line-height: 40px;
            background-color: rgba(139, 158, 112, 1);
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .div-6-03:focus{ background-color: #515c41;}
          .div-7-03 {
            padding: 0;
            border: 1px double rgba(139, 158, 112, 1);
            background: none;
            max-width: 100%;
            width: 100%;
            font-size: 12px;
            margin-top: 40px;
            height: 40px;
            letter-spacing: 5%;
            text-align: center;
            margin-left: 110px;
            font-family: JetBrains Mono, monospace;
            font-weight: 600;
            font-size: 18px;
            color: rgba(139, 158, 112, 1);
            line-height: 40px;
            background-color: rgba(255, 255, 255, 1);
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}</style>
      </>
    );
  }
