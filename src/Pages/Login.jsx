import React, { useState } from "react";
import { auth } from "../lib/firebase";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    if (email === "" || password === "") {
      setMsg("Please fill all fields");
      setLoading(false);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMsg("Login successful! Redirecting...");
      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      console.error("Login error:", error);
      setMsg("Invalid email or password");
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
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          <p className="text-gray-400 mt-2">Sign in to continue</p>
        </div>

        <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
          <div className="p-6 sm:p-8">
            {msg && (
              <div
                className={`alert ${
                  msg.includes("successful") ? "alert-success" : "alert-error"
                } mb-6 transition-all duration-300`}
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    {msg.includes("successful") ? (
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

            <form onSubmit={handleLogin} className="space-y-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-gray-300">
                    Email Address
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="input input-bordered input-lg w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-gray-300">
                    Password
                  </span>
                  <Link
                    to="/forgot-password"
                    className="label-text-alt link link-hover text-indigo-400"
                  >
                    Forgot password?
                  </Link>
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="input input-bordered input-lg w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                  required
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className={`btn btn-primary btn-lg w-full ${
                    loading ? "loading" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? "Signing in..." : "Login"}
                </button>
              </div>
            </form>

            <div className="divider my-6 text-gray-500">OR</div>

            <div className="flex flex-col gap-3">
              <button className="btn btn-outline btn-lg bg-gray-700 text-white hover:bg-gray-600 border-gray-600">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.917 16.083c-2.258 0-4.083-1.825-4.083-4.083s1.825-4.083 4.083-4.083c1.103 0 2.024.402 2.735 1.067l-1.107 1.068c-.304-.292-.834-.634-1.628-.634-1.394 0-2.531 1.155-2.531 2.579 0 1.424 1.138 2.579 2.531 2.579 1.616 0 2.224-1.162 2.316-1.762h-2.316v-1.417h3.855c.036.204.064.408.064.677 0 2.332-1.563 3.988-3.919 3.988z" />
                </svg>
                Continue with Google
              </button>
              {/* <button className="btn btn-outline btn-lg bg-gray-700 text-white hover:bg-gray-600 border-gray-600">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.026 18c-.688 0-1.25-.561-1.25-1.25s.562-1.25 1.25-1.25c.688 0 1.25.561 1.25 1.25s-.562 1.25-1.25 1.25zm1.022-5.5c0 .534-.393.75-.715.75-.323 0-.716-.216-.716-.75v-4.5c0-.534.393-.75.716-.75.322 0 .715.216.715.75v4.5z" />
                </svg>
                Continue with GitHub
              </button> */}
            </div>
          </div>

          <div className="bg-gray-900 px-6 py-4 text-center border-t border-gray-700">
            <p className="text-gray-400">
              Don't have an account?{" "}
              <Link
                to="/Signup"
                className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Create one!
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

export default Login;
