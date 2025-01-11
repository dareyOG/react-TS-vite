import React from 'react';

type Input = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ value, handleChange }: Input) {
  return <input type="text" value={value} onChange={handleChange} />;
}

export default Input;
