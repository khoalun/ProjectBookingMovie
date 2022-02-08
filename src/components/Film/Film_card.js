import React from "react";

export default function Film_card(props) {
  return (
    <div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src="img_avatar.png"
              alt="Avatar"
              style={{ width: 300, height: 300 }}
            />
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect &amp; Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
