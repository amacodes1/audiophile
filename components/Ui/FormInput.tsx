import React from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, id, error, className = '', ...props }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <label 
          htmlFor={id} 
          className={`text-xs font-bold tracking-[-0.21px] ${error ? 'text-red-500' : 'text-black'}`}
        >
          {label}
        </label>
        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
      <input
        id={id}
        className={`w-full px-6 py-4 border rounded-lg font-bold text-sm placeholder:text-black/40 focus:outline-none focus:ring-1 ${
          error 
            ? 'border-red-500 focus:ring-red-500' 
            : 'border-gray-300 focus:ring-orange focus:border-orange'
        } ${className}`}
        {...props}
      />
    </div>
  );
};

export default FormInput;