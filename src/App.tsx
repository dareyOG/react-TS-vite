import '../src/index.css';
import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import LoggedIn from './components/state/LoggedIn';
import User from './components/state/User';
import Status from './components/Status';

function App() {
  const personName = { first: 'Tomas', last: 'Soucek' };

  const nameList = [
    { first: 'Jon', last: 'Champion' },
    { first: 'Conor', last: 'McNamara' },
    { first: 'Peter', last: 'Drury' }
  ];

  return (
    <div className="App">
      Hello TS react
      <Greet name="James" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status={'error'} />
      <Heading>placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Tyler Perry</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          // console.log('Click button');
          console.log('Click button', event, id);
        }}
      />
      <Input value="" handleChange={event => console.log(event)} />
      <Container style={{ border: '1px solid red', padding: '1rem' }} />
      <LoggedIn />
    </div>
  );
}

export default App;
