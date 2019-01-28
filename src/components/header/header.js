import React from "react";
import "./header.css";

import Roll from "react-reveal/Roll";
import RubberBand from "react-reveal/RubberBand";

import { Link } from "react-router-dom";

const Header = () => {
  return (
      <div className="header">
        <div className="manage">
          <Link to="/" style={{textDecoration:"none"}}>
            <Roll left>
              <h1 className="title">Travel Together</h1>
            </Roll>
          </Link>

          <RubberBand>
            <h4 className="sub_title">Nature You Deserve</h4>
          </RubberBand>
        </div>
      </div>
  
  );
};

export default Header;
