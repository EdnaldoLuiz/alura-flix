import { BrowserRouter, Route, Routes as R } from 'react-router-dom';
import Home from '../components/Home/Home';
import NewForm from '../components/NewForm';

function Routes() {
  return (
    <BrowserRouter>
    <R>
        <Route exact path="/" component={Home} />
        <Route path="/novo-video" component={NewForm} />
    </R>
    </BrowserRouter>
  );
}

export default Routes;