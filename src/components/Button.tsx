import React, { ReactNode } from "react";

interface Props {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger";
}

//rafce
const Button = ({ children, onClick, color }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick} color="primary">
      {children}
    </button>
  );
};

export default Button;
