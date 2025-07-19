import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../redux/Features/AuthApi";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUserRole } from "../../redux/AuthSlice/AuthSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginUser, { isLoading }] = useLoginUserMutation();
  const [error, setError] = useState({});

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Demo user data
  const demoUsers = [
    { email: "admin@gmail.com", password: "password" },
    { email: "user@gmail.com", password: "password" },
    { email: "organizer@gmail.com", password: "password" },
  ];

  // Autofill demo credentials
  const fillDemoData = (user) => {
    setFormData({ email: user.email, password: user.password });
  };

  const validateForm = () => {
    const newError = {};
    if (!formData.email) {
      newError.email = "Email is required";
    }
    if (!formData.password) {
      newError.password = "Password is required";
    }
    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      let res = await loginUser(formData).unwrap();
      console.log(res);

      if (res?.status === true) {
        toast.success(res.message || "Login successful");
        dispatch(
          setUserRole({
            role: res?.data?.role,
            token: res?.token,
          })
        );
        navigate("/");
      } else {
        toast.error("Unexpected response from server.");
      }
    } catch (err) {
      toast.error(err?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Login your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              {error.email && (
                <p className="text-red-500 text-sm mt-1">{error.email}</p>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              {error.password && (
                <p className="text-red-500 text-sm mt-1">{error.password}</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {isLoading ? "Loading..." : "Log in"}
            </button>
          </div>
        </form>

        {/* Demo Users Section */}
        <div className="mt-6">
          <p className="text-sm font-medium text-gray-700 mb-2">
            Try Demo Users:
          </p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            {demoUsers.map((user, index) => (
              <button
                key={index}
                type="button"
                onClick={() => fillDemoData(user)}
                className="w-full rounded-md border border-indigo-600 text-indigo-600 hover:bg-indigo-50 py-1 text-sm font-semibold"
              >
                {user.email.split("@")[0]}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          create an account
          <Link
            to="/signup"
            className="font-semibold ml-4 text-indigo-600 hover:text-indigo-500"
          >
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
