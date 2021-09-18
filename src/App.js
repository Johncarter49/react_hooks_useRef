import './App.css';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';

function App() {
  return (
    <div className="App">
     { false && <ClassComponent />}
     { true ? <FunctionalComponent /> : null}
    </div>
  );
}

export default App;
