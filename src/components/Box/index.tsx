import * as React from 'react';

export type BoxProps<C extends keyof JSX.IntrinsicElements> = {
  children?: React.ReactNode;
  component?: C;
} & React.HTMLAttributes<HTMLOrSVGElement> &
  JSX.IntrinsicElements[C];

export function Box<C extends keyof JSX.IntrinsicElements>({
  children,
  component,
  ...otherProps
}: BoxProps<C>) {
  return React.createElement(component || 'div', otherProps, children);
}
