type ContainerProps = {
  style: React.CSSProperties;
};

function Container({ style }: ContainerProps): React.JSX.Element {
  return <div style={style}>Text content goes here</div>;
}

export default Container;
