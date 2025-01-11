import React from 'react';

type Button = {
  //   handleClick: () => void;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

function Button({ handleClick }: Button) {
  return <button onClick={event => handleClick(event, 1)}>Click</button>;
}

export default Button;
