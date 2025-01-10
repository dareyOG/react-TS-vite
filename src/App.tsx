import '../src/index.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

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
      <Greet name="James" messageCount={15} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
