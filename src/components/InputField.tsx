import React from "react";

interface InputFieldProps {
  label: string;
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  value,
  placeholder,
  onChange,
  error,
}) => {
  return (
    <div className="w-full">
      <label className="block mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none transition-all duration-200 
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
          ${error ? "border-red-500" : "border-gray-300"} 
          hover:border-blue-400`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default InputField;
