import React from "react";
import "./footer.css";
import {Link} from "react-router-dom";

const Footer = () => {

    const styles = {
        textDecoration:"none",
        color:"inherit"
    }
    
  return (
        <div className="footer">
            <div className="footer_sub">
                <Link to="/about" style={{...styles}} className="link" >About Us</Link>
            </div>
            <div className="footer_sub">
                <Link to="/contact" style={{...styles}} className="link" >Contact Us</Link>
            </div>
            <div className="footer_sub">
                <Link to="/book" style={{...styles}} className="link" >Book Your Next Travel</Link>
            </div>
        </div>
  );
};

export default Footer;
