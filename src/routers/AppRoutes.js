import { Route, Switch } from 'react-router-dom';
import TodoPage from '../pages/Todo';
import InputItems from '../components/Input';
import ListItems from '../components/List';
import Navbar from '../components/Navbar';


const AppRouter = () => {
    return(
        <div>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route path='/' exact component={TodoPage} />
                    <Route path='/' component={InputItems} />
                    <Route component={ListItems} />
                </Switch>
            </div>
        </div>
    );
};

export default AppRouter;