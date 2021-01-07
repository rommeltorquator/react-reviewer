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

function App() {
  return (
    <div className="App">
      <ParentComponent />
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
// 16