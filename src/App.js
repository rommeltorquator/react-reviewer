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

// **************************************************************************************

import Timer from './components/Timer'; // react lifecycle methods, componentDidMount
import ZenQuote from './components/ZenQuote'; // loading data via ajax, axios, componentDidMount, adding animated loaders, componentDidUpdate
import GithubUserInfo from './components/GithubUserInfo'; // loading data with async functions, componentDidMount

// study lifecycle methods, mounting lifecycle methods

import FragmentDemo from './components/FragmentDemo'; // fragments
import Table from './components/Table'; // fragments
import PureComp from './components/PureComp'; // pure component
import ParentComp from './components/ParentComp'; // pure component, memo component
import RefsDemo from './components/RefsDemo'; // refs, go back here

// **************************************************************************************

import TodoList from './components/TodoList'; // componentDidUpdate(prevProps, prev,State), componentWillMount

// **************************************************************************************

import Deck from './components2/Deck'; // componentDidMount, axios, key, ajax, try-catch, uuid, looping child component
import JokeList from './components2/JokeList'; // componentDidMount, axios, key, ajax, try-catch, uuid, looping child component

// **************************************************************************************

import Dog from './components2/Dog'; // react router
import About from './components2/About'; // react router
import Contact from './components2/Contact'; // react router

import { Route, Switch, NavLink } from 'react-router-dom'; // react router
import VendingMachine from './components2/VendingMachine'; // react router, child props
import Chips from './components2/Chips'; // react router, child props
import Sardines from './components2/Sardines'; // react router, child props
import Soda from './components2/Soda'; // react router, child props
import Navbar from './components2/Navbar' // react router, child props
import Food from './components2/Food';

// install react-router-dom, go to index.js, import and add BrowserRouter, study child props used for wrapping elements

function App() {
  return (
    <div className="App">
      {/* <Route exact path="/food/:name" component={Food} />  */}
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" render={() => <VendingMachine />} />  
        <Route exact path="/soda" render={() => <Soda />} />  
        <Route exact path="/sardines" render={() => <Sardines />} />  
        <Route exact path="/chips" render={() => <Chips />} />  
      </Switch>
      

      {/* react router */}
      <nav>
        <NavLink exact activeClassName="active-link" to='/'>About</NavLink>
        <NavLink exact activeClassName="active-link" to='/dog'>Dog</NavLink>
        <NavLink exact activeClassName="active-link" to='/contact'>Contact</NavLink>
      </nav>

      <Switch>
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/dog" render={() => <Dog name="Tukol" />} />
        <Route exact path="/" component={About} />
      </Switch>
      {/* react router */}

      {/* <JokeList /> */}

      {/* <Deck /> */}
      {/* <TodoList /> */}
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