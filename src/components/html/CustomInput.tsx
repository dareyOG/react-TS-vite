import React from 'react';

/* type InputTypeProps = {
  type: 'text' | 'password' | 'number';
};

export default function CustomInput({ type }: InputTypeProps) {
  return <input type={`${type}`} />;
} */

type InputTypeProps = React.ComponentProps<'input'>;

export default function CustomInput({ ...rest }: InputTypeProps) {
  return <input {...rest} />;
}
