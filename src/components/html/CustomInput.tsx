<<<<<<< HEAD
import React from 'react';

/* type InputTypeProps = {
  type: 'text' | 'password' | 'number';
};

export default function CustomInput({ type }: InputTypeProps) {
  return <input type={`${type}`} />;
} */

type InputTypeProps = React.ComponentProps<'input'>;

export default function CustomInput({ ...rest }: InputTypeProps) {
=======
/* type InputProps = {
  type: 'text' | 'number' | 'password';
} & React.ComponentProps<'input'>;

export default function CustomInput({ type, ...rest }: InputProps) {
  return <input type={`${type}`} {...rest} />;
} */

type InputProps = React.ComponentProps<'input'>;

export default function CustomInput({ ...rest }: InputProps) {
>>>>>>> 2f2fe27d19875b661d996d7a6724c5368623ea72
  return <input {...rest} />;
}
