type Person = {
  name: { first: string; last: string };
};

/* function Person(props: Person) {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
} */

function Person({ name }: Person) {
  return (
    <div>
      {name.first} {name.last}
    </div>
  );
}

export default Person;
