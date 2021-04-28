import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';
import TodoPage from './pages/TodoPage';



const App = () => {
  return (
    <Router>
      <GlobalProvider>
        <TodoPage/>
      </GlobalProvider>
    </Router>
  );
};

export default App;
