/* type InputProps = {
  type: 'text' | 'number' | 'password';
} & React.ComponentProps<'input'>;

export default function CustomInput({ type, ...rest }: InputProps) {
  return <input type={`${type}`} {...rest} />;
} */

type InputProps = React.ComponentProps<'input'>;

export default function CustomInput({ ...rest }: InputProps) {
  return <input {...rest} />;
}
