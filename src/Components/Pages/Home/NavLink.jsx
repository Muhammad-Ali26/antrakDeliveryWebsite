import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavLink(props) {
  const location = useLocation().pathname;
  return (
    <Link
      to={props.to}
      className={`${
        location === props.to
          ? "text-white bg-antrakBlue"
          : "text-antrakBlue bg-transparent"
      } px-5 pb-3 pt-6 md:px-5 md:py-3 font-bold text-lg md:xl lg:text-xl hover:bg-antrakBlue hover:text-antrakWhite rounded duration-300`}
    >
      {props.title}
    </Link>
  );
}
