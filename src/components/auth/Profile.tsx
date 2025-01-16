export type Profile = {
  name: string;
};

export default function Profile({ name }: Profile) {
  return <div>private profile component. Name is {name}</div>;
}
