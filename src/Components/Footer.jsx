import React from "react";
const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <footer className="footer pt-3">
      <p className="small">Copyright {year}, Vision Design-graphic zoo</p>
      <p className="small text-warning">Design and coding by response team</p>
    </footer>
  );
};
export default Footer;
