import React from "react";
import "./style.css";

export default function BuyMeCoffee() {
  return (
    <a
      href="https://www.buymeacoffee.com/spurushottam13"
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="content-section buy-me-coffee">
        <img
          alt="buy me coffee"
          height={45}
          src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=spurushottam13&button_colour=5F7FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00"
        />
        <div className="hider"></div>
      </div>
    </a>
  );
}
