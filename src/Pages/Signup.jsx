import React, { useState } from "react";
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const Signup = () => {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMsg("");
    setIsSuccess(false);

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      setMsg("Please fill all fields");
      setLoading(false);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMsg("Account created successfully!");
      setIsSuccess(true);
      event.target.reset();
    } catch (error) {
      setMsg(error.message.replace("Firebase: ", ""));
      setIsSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="mx-auto bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white">Create Account</h1>
          <p className="text-gray-400 mt-2">Join us to get started</p>
        </div>

        <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
          <div className="p-6 sm:p-8">
            {msg && (
              <div
                className={`alert ${
                  isSuccess ? "alert-success" : "alert-error"
                } mb-6 transition-all duration-300`}
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    {isSuccess ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    )}
                  </svg>
                  <span>{msg}</span>
                </div>
              </div>
            )}

            <form onSubmit={submitHandler} className="space-y-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-gray-300">
                    Email Address
                  </span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className="input input-bordered input-lg w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
                  disabled={loading || isSuccess}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-gray-300">
                    Password
                  </span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  className="input input-bordered input-lg w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
                  disabled={loading || isSuccess}
                  required
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className={`btn ${
                    isSuccess ? "btn-success" : "btn-primary"
                  } btn-lg w-full ${loading ? "loading" : ""}`}
                  disabled={loading || isSuccess}
                >
                  {isSuccess ? (
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Account Created
                    </span>
                  ) : loading ? (
                    "Creating account..."
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="bg-gray-900 px-6 py-4 text-center border-t border-gray-700">
            <p className="text-gray-400">
              Already have an account?{" "}
              <Link
                to="/"
                className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Login now
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2023 Your Company. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
