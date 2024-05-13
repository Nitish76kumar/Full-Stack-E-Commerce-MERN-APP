import React from "react";
import logo from "../assest/logo.jpg";
function Logo({ w, h }) {
  return (
    <div>
      <img src={logo} width={w} height={h} alt="" className="rounded-full" />
    </div>
  );
}

export default Logo;
