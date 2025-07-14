import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Logout } from "../redux/AuthSlice/AuthSlice";
import { useLogoutUserMutation } from "../redux/Features/AuthApi";

function HeaderLayout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginOutUser, { isLoading }] = useLogoutUserMutation();

  const role = useSelector((state) => state.Auth.role);

  const handleLogout = async () => {
    const logout = await loginOutUser().unwrap();
    if (logout.status === true) {
      dispatch(Logout());
      navigate("/");
    }
  };
  // console.log(role);
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
                <ul className="flex gap-5 py-2 font-bold">
                  {role === null ? (
                    <Link to="/login" className="ring px-4 py-2 rounded">
                      Login
                    </Link>
                  ) : (
                    <>
                      <Link to="/" className="ring px-4 py-2 rounded">
                        Dashboard
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="ring px-4 py-2 rounded"
                      >
                        {isLoading ? "Loading..." : "Logout"}
                      </button>
                    </>
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
