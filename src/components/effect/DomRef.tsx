import { useEffect, useRef } from 'react';

export default function DomRef() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(function () {
    inputRef.current?.focus();

    // const Focus = (e: { key: string }) => {
    //   if (e.key === 'Enter') inputRef.current?.focus();
    // };

    // document.addEventListener('keydown', Focus);
    // return () => {
    //   document.removeEventListener('keydown', Focus);
    // };
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}
