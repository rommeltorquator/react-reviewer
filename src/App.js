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

import Timer from './components/Timer'; // react lifecycle methods, componentDidMount
import ZenQuote from './components/ZenQuote'; // loading data via ajax, axios, componentDidMount, adding animated loaders, componentDidUpdate
import GithubUserInfo from './components/GithubUserInfo'; // loading data with async functions, componentDidMount

// study lifecycle methods, mounting lifecycle methods

import FragmentDemo from './components/FragmentDemo'; // fragments
import Table from './components/Table'; // fragments
import PureComp from './components/PureComp'; // pure component
import ParentComp from './components/ParentComp'; // pure component, memo component
import RefsDemo from './components/RefsDemo'; // refs, go back here

function App() {
  return (
    <div className="App">
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <PureComp /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <GithubUserInfo username='facebook' /> */}
      {/* <GithubUserInfo username='colt' /> */}
      {/* <ZenQuote /> */}
      {/* <Timer /> */}
      {/* <LifecycleA /> */}
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
// video 28