import React from "react";
import { Link } from "react-router-dom";

function HeaderLayout() {
  const isLoggedIn = !!localStorage.getItem("token");
  return (
    <>
      <div>
        <header>
          <div className="container w-max-[1140px] mx-auto">
            <nav className="flex items-center justify-between">
              <div>
                <h1 className="text-5xl font-bold">
                  <a href="/">
                    <span className="text-red-500">T</span>icket Pro
                  </a>
                </h1>
              </div>
              <div>
                <ul className="flex gap-5 font-bold">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/About">About</Link>
                  </li>
                  <li>
                    <Link to="/Testimonial">Testimonial</Link>
                  </li>
                  <li>
                    <Link to="/Help">Help</Link>
                  </li>
                  <li>
                    <Link to="/Contact">Contact us</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  {isLoggedIn ? (
                    <Link to="/" className="ring px-4 py-2 rounded">
                      Dashboard
                    </Link>
                  ) : (
                    <Link to="/login" className="ring px-4 py-2 rounded">
                      Login
                    </Link>
                  )}
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}

export default HeaderLayout;
