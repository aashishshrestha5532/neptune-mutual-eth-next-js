import React, { ChangeEvent } from "react";

interface IProps {
  placeholder: string;
  type: string;
  value: string | number;
  name: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput({
  placeholder,
  type,
  value,
  name,
  label,
  onChange,
}: IProps) {
  return (
    <div className="flex flex-row  items-center border-gray-300 w-full h-10 border bg-white rounded-sm">
      <span className="border border-gray-300 border-l-0 border-t-0 border-b-0 text-black px-5 bg-neptune h-full flex items-center justify-center">
        {label}
      </span>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        className="bg-transparent w-full h-full text-gray-500 pl-2 placeholder:text-gray-400"
      />
    </div>
  );
}
