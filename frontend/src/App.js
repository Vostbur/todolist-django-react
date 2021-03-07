import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Todos from './Components/Todos/Todos';
import TodoDetail from './Components/TodoDetail/TodoDetail';


function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Todos} />
        <Route path="/:id" exact component={TodoDetail} />
      </Switch>
    </Router>
  );
}

export default App;
