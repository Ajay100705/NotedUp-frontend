import React, { useState } from "react";
import InputField from "./InputField";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const handleLogin = () => {
    console.log("Email/Username:", email);
    console.log("Password:", password);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};
    if (!email.trim()) newErrors.email = "Email or username is required";
    if (!password.trim()) newErrors.password = "Password is required";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      handleLogin();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InputField
        label="Email or Username"
        value={email}
        onChange={setEmail}
        placeholder="Enter your email or username"
        error={errors.email}
      />

      <InputField
        label="Password"
        type="password"
        value={password}
        onChange={setPassword}
        placeholder="Enter your password"
        error={errors.password}
      />

      <div className="flex justify-end">
        <a
          href="#"
          className="text-sm text-blue-600 hover:underline hover:text-blue-800"
        >
          Forgot Password?
        </a>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
