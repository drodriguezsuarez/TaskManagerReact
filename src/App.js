import './App.css';
import logoProject from './images/logo.svg';
import ListTask from './components/listTask'

function App() {
  return (
    <div className='app-task'>
     <div className='logo-container'>
      <img 
        src={logoProject}
        className='logo-react-task' />
     </div>
     <div className='task-list'>
      <h1>My Tasks</h1>
      <ListTask />
     </div>
    </div>
  );
}

export default App;
