import React from "react";
import { motion } from "framer-motion";

interface AuthCardProps {
  children: React.ReactNode;
}

const AuthCard: React.FC<AuthCardProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-md"
    >
      {children}
    </motion.div>
  );
};

export default AuthCard;
