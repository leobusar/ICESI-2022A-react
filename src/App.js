import './App.css';
import TaskList from './components/TaskList';

function App() {

  let owner= { nombre:"Leonardo", apellido:"Bustamante"}
  return (
    <div className="App">
         <TaskList owner={owner}/>
    </div>
  );
}

export default App;
