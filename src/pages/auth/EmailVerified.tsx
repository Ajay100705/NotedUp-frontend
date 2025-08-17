import React from "react";

const EmailVerified: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          ✅ Email Verified!
        </h2>
        <p className="text-gray-600 mb-6">
          Your account has been activated. You can now log in.
        </p>
        <a
          href="/login"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Go to Login
        </a>
      </div>
    </div>
  );
};

export default EmailVerified;
