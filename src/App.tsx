import '../src/index.css';
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';
import Button from './components/Button';
import Container from './components/Container';
import Box from './components/context/Box';
import { ThemeProvider } from './components/context/ThemeContext';
import User from './components/context/User';
import { UserContextProvider } from './components/context/UserContext';
import DomRef from './components/effect/DomRef';
// import MutableRef from './components/effect/MutableRef';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import LoggedIn from './components/state/LoggedIn';
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
      <ThemeProvider>
        <Box />
      </ThemeProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <DomRef />
      {/* <MutableRef /> */}
      <Private isLoggedIn={true} component={Profile} />
    </div>
  );
}

export default App;
