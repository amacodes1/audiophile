import React from 'react';

interface RadioInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const RadioInput: React.FC<RadioInputProps> = ({ label, id, className = '', ...props }) => {
  return (
    <div className={`flex items-center w-full px-6 py-4 border rounded-lg font-bold text-sm cursor-pointer transition-colors ${
      props.checked ? 'border-orange border-2' : 'border-gray-300 hover:border-orange'
    } ${className}`}>
      <input
        type="radio"
        id={id}
        className="w-5 h-5 accent-orange cursor-pointer"
        {...props}
      />
      <label htmlFor={id} className="ml-4 cursor-pointer select-none">
        {label}
      </label>
    </div>
  );
};

export default RadioInput;