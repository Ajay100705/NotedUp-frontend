import React, { useState } from "react";
import AuthCard from "../../components/AuthCard";
import InputField from "../../components/InputField";
import Logo from "../../components/Logo";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
      return;
    }

    try {
      const res = await fetch("http://localhost:8000/api/auth/forgot-password/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Failed to send OTP");

      setMessage("OTP sent to your email. Check inbox!");
      window.location.href = `/otp?email=${email}`;
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <AuthCard>
        <Logo />
        <form onSubmit={handleForgotPassword} className="space-y-4">
          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(val) => setEmail(val)}
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {message && <p className="text-green-600 text-sm">{message}</p>}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Send OTP
          </button>

          <a
            href="/login"
            className="block text-center text-sm text-blue-600 hover:underline"
          >
            Back to Login
          </a>
        </form>
      </AuthCard>
    </div>
  );
};

export default ForgotPassword;
