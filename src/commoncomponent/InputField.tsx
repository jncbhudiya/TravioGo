type InputFieldProps = {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
};

export function InputField({
  label,
  type,
  value,
  onChange,
  placeholder,
  icon,
}: InputFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1 font-[ubuntu]">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 font-[ubuntu] text-black rounded-md focus:outline-none focus:ring-1 focus:ring-[#EC9105] hover:border-amber-500"
          placeholder={placeholder}
          required
        />
        {icon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
