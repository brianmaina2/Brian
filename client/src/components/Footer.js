import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container" style={{ marginTop: "80px" }}>
      <section className="finance">
        <p>
          <span className="material-icons-outlined">home</span> Nairobi, Kenya
        </p>
        <p>
          <span className="material-icons-outlined">phone_in_talk</span> Tel
          Number: +254 123 456 789
        </p>
        <p>
          <span className="material-icons-outlined">location_on</span> Moi Avenue
        </p>
        <p>
          <span className="material-icons-outlined">send</span>{" "}
          myfinancewebapp@gmail.com
        </p>
        <footer>
        <p>My Finance App &copy; 2023</p>
      </footer>
      </section>
    </div>
  );
}

export default Footer;
