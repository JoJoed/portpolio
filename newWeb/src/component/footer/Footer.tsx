import React from "react";
import dayjs from "dayjs";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        <span>
          © {dayjs().format("YYYY")} Jo, Jeong-Hyeon All Rights Reserved.
        </span>
      </p>
    </footer>
  );
};

export default Footer;
