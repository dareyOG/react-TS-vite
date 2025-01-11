import '../src/index.css';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
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
    </div>
  );
}

export default App;
