import React from "react";
import { Logo } from "../Logo";
import "./Header.css";

import b3d from "../Logo/img/b3d.svg";
import logo from "../Logo/img/logo.svg";

export function Header() {
  return (
    <header className="header">
      <div className="flexContainer">
        <span className="headerTitle">
          Brightlab <br /> blog{" "}
        </span>
        <Logo className="b3d" src={b3d} />
        <Logo className="min" src={logo} />
        <a className="headerLink" href="https://brightlab.me/">
          Oficial website
          <sup>
            <svg
              width="11"
              height="10"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 1.84811H13V0.848114H12V1.84811ZM11.2947 1.13918L0.294728 12.0823L1.70527 13.5002L12.7053 2.55705L11.2947 1.13918ZM3 2.84811H12V0.848114H3V2.84811ZM11 1.84811V10.8016H13V1.84811H11Z"
                fill="black"
              />
            </svg>
          </sup>
        </a>
      </div>
    </header>
  );
}
