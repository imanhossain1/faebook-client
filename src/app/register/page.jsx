
"use client";

import { useState } from "react";

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const registerData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    };

    // Check Password
    if (registerData.password !== registerData.confirmPassword) {
      console.log("Password does not match!");
      return;
    }

    console.log("Register Form Data:", registerData);

    // TODO: Better Auth Register
    // const { data, error } = await authClient.signUp.email({
    //   name: registerData.name,
    //   email: registerData.email,
    //   password: registerData.password,
    // });

    // TODO: Handle Better Auth errors
    // TODO: Redirect user after successful registration

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-10">

      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary">
            Connectly
          </h1>

          <p className="text-base-content/60 mt-2">
            Join Connectly and start connecting with people.
          </p>
        </div>

        {/* Register Card */}
        <div className="card bg-base-100 shadow-xl border border-base-300">
          <div className="card-body p-7">

            <h2 className="text-2xl font-bold text-center">
              Create Account
            </h2>

            <p className="text-center text-base-content/60 mb-4">
              Sign up to get started
            </p>

            {/* Register Form */}
            <form onSubmit={handleRegister} className="space-y-4">

              {/* Name */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm">
                  Full Name
                </legend>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className="input input-bordered w-full"
                  required
                />
              </fieldset>

              {/* Email */}
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

              {/* Password */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm">
                  Password
                </legend>

                <input
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  className="input input-bordered w-full"
                  minLength={6}
                  required
                />
              </fieldset>

              {/* Confirm Password */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm">
                  Confirm Password
                </legend>

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  className="input input-bordered w-full"
                  minLength={6}
                  required
                />
              </fieldset>

              {/* Register Button */}
              <button
                type="submit"
                className="btn btn-primary w-full text-base"
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>

            </form>

            <div className="divider">OR</div>

            {/* Google Register - Better Auth TODO */}
            <button
              type="button"
              className="btn btn-outline w-full"
              onClick={() => {
                // TODO: Implement Better Auth Google Sign Up
                console.log("Google Register Clicked");
              }}
            >
              Continue with Google
            </button>

            {/* Login Link */}
            <p className="text-center text-sm mt-5">
              Already have an account?{" "}
              <a
                href="/login"
                className="link link-primary font-semibold"
              >
                Login
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

export default RegisterPage;
