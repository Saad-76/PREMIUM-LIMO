import React from "react";

interface btnField {
  placeholder: string;
}

const SecondarBtn: React.FC<btnField> = ({ placeholder }) => {
  return (
    <button className="relative inline-block text-slate-50 pb-2 tracking-wide w-2/8">
      {placeholder}
      <span className="absolute bottom-0  left-0 bg-gray-50 h-1  w-3/4"></span>
    </button>
  );
};
export default SecondarBtn;
