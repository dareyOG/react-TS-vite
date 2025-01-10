type PersonList = {
  names: { first: string; last: string }[];
};

function PersonList({ names }: PersonList) {
  //   console.log(names);
  return (
    <div>
      {names.map(name => (
        <h2 key={name.last}>
          {name.first} {name.last}
        </h2>
      ))}
    </div>
  );
}

export default PersonList;
