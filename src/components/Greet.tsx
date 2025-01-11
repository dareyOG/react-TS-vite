type Greet = {
  name: string;
  messageCount?: number; // optional type
  isLoggedIn: boolean;
};

function Greet({ name, messageCount = 5, isLoggedIn }: Greet) {
  return (
    <div>
      <h2>
        {!isLoggedIn
          ? `Welcome ${name}!, you have ${messageCount} unread messages`
          : 'Welcome Guest'}
      </h2>
    </div>
  );
}

/* function Greet(props: Greet) {
  return (
    <div>
      <h2>Welcome {props.name}!, you have 10 unread messages</h2>
    </div>
  ); 
}*/

export default Greet;
