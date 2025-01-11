import { Person as PersonProp } from './Person.type';

/* function Person(props: Person) {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
} */

function Person({ name }: PersonProp) {
  return (
    <div>
      {name.first} {name.last}
    </div>
  );
}

export default Person;
