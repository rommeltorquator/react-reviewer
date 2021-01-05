import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheets';
import Inline from './components/Inline';

import './components/appStyles.css';
import styles from './components/appStyles.module.css';

function App() {
  return (
    <div className="App">
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline />
      {/* <Stylesheet /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}

      {/* <ParentComponent /> */}
      {/* <EventBind /> */}

      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}

      {/* <Counter /> */}
      {/* <Message /> */}

      {/* <Greet name="Rommel" heroName="Lion">
        <p>This is a child props inside a function component</p>
      </Greet> */}
      {/* <Greet name="Melo" heroName="Ogre" /> */}
      {/* <Greet name="Toshi" heroName="Ancient Apparition" /> */}

      {/* <Welcome name="Melo" heroName="Ogre" /> */}
      {/* <Welcome name="Rommel" heroName="Lion" /> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;

// video 21