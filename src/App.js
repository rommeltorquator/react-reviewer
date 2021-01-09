import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet'; // functional components, props topic, children props, destructuring props
import Welcome from './components/Welcome' // class components, props topic, destructuring props and state
import Hello from './components/Hello' // JSX
import Message from './components/Message'; // state
import Counter from './components/Counter'; // setState
import FunctionClick from './components/FunctionClick'; // event handling on function
import ClassClick from './components/ClassClick'; // event handling on class
import EventBind from './components/EventBind'; // binding event handlers
import ParentComponent from './components/ParentComponent'; // methods as props, passing parameter from child to parent component

import UserGreeting from './components/UserGreeting'; // conditional rendering, using if else, ternary operator
import NameList from './components/NameList'; // list rendering, map function, lists and keys, index as key anti-pattern

import Stylesheet from './components/Stylesheet'; // styling and css basics
import Inline from './components/Inline'; // inline styling

import './appStyles.css' // external css
import styles from './appStyles.module.css' // module css
import Form from './components/Form'; // form handling basics, controlled component
import LifecycleA from './components/LifecycleA'; // Component Mounting Lifecycle Methods, Component Updating Lifecycle Methods

// study lifecycle methods, mounting lifecycle methods

function App() {
  return (
    <div className="App">
      <LifecycleA />
      {/* <Form /> */}
      {/* <h1 className="error">Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}

      {/* <Inline className="error" /> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}

      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}

      {/* <Counter /> */}
      {/* <Message /> */}

      {/* <Greet name="Rommel" heroName="Batman">
        <p>This is children props</p>
      </Greet> */}
      {/* <Greet name="Toshi" heroName="Superman">
        <button>Press me</button>
      </Greet> */}
      {/* <Greet name="Melo" heroName="Spiderman" /> */}

      {/* <Welcome name="Rommel" heroName="Batman" /> */}
      {/* <Welcome name="Toshi" heroName="Superman" /> */}
      {/* <Welcome name="Melo" heroName="Spiderman" /> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
// video 25