import React from 'react';

type ButtonProps = {
  btnType: 'primary' | 'secondary' | 'small';

  //   omitting the ReactNode as a children type
  children: string;
} & Omit<React.ComponentProps<'button'>, 'children'>;

export default function CustomButton({ btnType, children, ...rest }: ButtonProps) {
  return (
    <button className={`class-with-${btnType}`} {...rest}>
      {children}
    </button>
  );
}
