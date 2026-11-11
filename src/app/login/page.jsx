
"use client";

import { useState } from "react";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const loginData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    console.log("Login Form Data:", loginData);

    // TODO: Better Auth Login
    // const { data, error } = await authClient.signIn.email({
    //   email: loginData.email,
    //   password: loginData.password,
    // });

    // TODO: Handle Better Auth error and redirect after login

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-10">

      <div className="w-full max-w-md">

        {/* Logo / Website Name */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary">
            Connectly
          </h1>
          <p className="text-base-content/60 mt-2">
            Connect with friends and the world around you.
          </p>
        </div>

        {/* Login Card */}
        <div className="card bg-base-100 shadow-xl border border-base-300">
          <div className="card-body p-7">

            <h2 className="text-2xl font-bold text-center">
              Welcome Back
            </h2>

            <p className="text-center text-base-content/60 mb-4">
              Login to your account
            </p>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-4">

              {/* Email Field */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm">
                  Email Address
                </legend>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                  required
                />
              </fieldset>

              {/* Password Field */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm">
                  Password
                </legend>

                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                  required
                />
              </fieldset>

              {/* Forgot Password */}
              <div className="text-right">
                <a
                  href="/forgot-password"
                  className="link link-primary text-sm"
                >
                  Forgot password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="btn btn-primary w-full text-base"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>

            </form>

            <div className="divider">OR</div>

            {/* Google Login - Better Auth TODO */}
            <button
              type="button"
              className="btn btn-outline w-full"
              onClick={() => {
                // TODO: Implement Better Auth Google Login
                console.log("Google Login Clicked");
              }}
            >
              Continue with Google
            </button>

            {/* Register Link */}
            <p className="text-center text-sm mt-5">
              Don't have an account?{" "}
              <a href="/register" className="link link-primary font-semibold">
                Create Account
              </a>
            </p>

          </div>
        </div>

        <p className="text-center text-xs text-base-content/50 mt-6">
          © 2026 Connectly. All rights reserved.
        </p>

      </div>
    </div>
  );
};

export default LoginPage;
