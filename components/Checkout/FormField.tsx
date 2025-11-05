import React from 'react';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  containerClassName?: string;
  error?: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, id, containerClassName = '', error, ...props }) => {
  return (
    <div className={containerClassName}>
      <label htmlFor={id} className={`block text-xs font-bold mb-2 tracking-[-0.2px] ${error ? 'text-red-500' : ''}`}>
        {label}
      </label>
      <input
        id={id}
        className={`w-full px-6 py-4 border-2 rounded-lg font-bold text-sm focus:outline-none focus:ring-1 placeholder:text-black/40 ${
          error 
            ? 'border-red-500 focus:ring-red-500' 
            : 'border-gray-300 focus:ring-orange'
        }`}
        {...props}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default FormField;