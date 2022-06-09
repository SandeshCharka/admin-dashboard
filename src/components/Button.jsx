import React from 'react';

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width, ...buttonProps }) => {
  return (
    <button
      type='button'
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
      {...buttonProps}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
