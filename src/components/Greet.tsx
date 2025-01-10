type Greet = {
  name: string;
};

/* function Greet({ name }: Greet) {
  return (
    <div>
      <h2>Welcome {name}!, you have 10 unread messages</h2>
    </div>
  );
} */

function Greet(props: Greet) {
  return (
    <div>
      <h2>Welcome {props.name}!, you have 10 unread messages</h2>
    </div>
  );
}

export default Greet;
