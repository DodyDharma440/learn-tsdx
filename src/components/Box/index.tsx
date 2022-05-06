import * as React from 'react';

type BaseBoxProps<C, P = unknown> = {
  children?: React.ReactNode;
  component?: C | React.ComponentType<P>;
};

export type BoxProps<C, P = unknown> = C extends keyof JSX.IntrinsicElements
  ? React.HTMLAttributes<HTMLOrSVGElement> &
      JSX.IntrinsicElements[C] &
      React.ComponentPropsWithRef<C> &
      BaseBoxProps<C, P>
  : P & BaseBoxProps<C, P>;

// export function Box<C, P = unknown>({
//   children,
//   component,
//   ...otherProps
// }: BoxProps<C, P>) {
//   const Element = (component as keyof JSX.IntrinsicElements) || 'div';

//   return <Element {...otherProps}>{children}</Element>;

//   // const _component = component as keyof JSX.IntrinsicElements
//   // return React.createElement(_component || 'div', otherProps, children);
// }

export type BoxComponentType = <C, P = unknown>(
  props: BoxProps<C, P>
) => JSX.Element;

export const Box: BoxComponentType = React.forwardRef(
  <C, P = unknown>({ children, component, ...otherProps }: BoxProps<C, P>) => {
    const Element = (component as keyof JSX.IntrinsicElements) || 'div';

    return <Element {...otherProps}>{children}</Element>;

    // const _component = component as keyof JSX.IntrinsicElements
    // return React.createElement(_component || 'div', otherProps, children);
  }
) as any;
