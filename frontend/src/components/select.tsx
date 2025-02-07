import * as React from "react";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
  onValueChange?: (value: string) => void; // Allow handling value change
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, className, onValueChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (onValueChange) {
        onValueChange(e.target.value); // Trigger the onValueChange callback if it's provided
      }
    };

    return (
      <div className="relative">
        <select
          ref={ref}
          className={`border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none ${className}`}
          onChange={handleChange} // Handle change correctly
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">▼</span>
      </div>
    );
  }
);

Select.displayName = "Select";

export { Select };
