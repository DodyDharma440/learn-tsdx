import * as React from 'react';

export type ButtonProps = {
  custom?: string;
  children?: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ children, custom }) => {
  return (
    <button>
      {children} {custom}
    </button>
  );
};
