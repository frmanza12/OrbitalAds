import { useRoutes } from 'react-router-dom';
import routes from './routes';
import './App.css';
import './utils/i18n/i18n'

function App() {
  const routing = useRoutes(routes);
  return (
    <div className="App">
     {routing}
    </div>
  );
}

export default App;
