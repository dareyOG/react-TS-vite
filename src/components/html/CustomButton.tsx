type ButtonProps = {
  btnVariant: 'primary' | 'secondary';
} & React.ComponentProps<'button'>;

export default function CustomButton({ btnVariant, children, ...rest }: ButtonProps) {
  return (
    <button className={`class-with-${btnVariant}`} {...rest}>
      {children}
    </button>
  );
}
