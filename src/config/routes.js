import {Routes,  Route, BrowserRouter as Router} from 'react-router-dom';
import Home from '../components/Home'
import About from '../components/About'
import TaskList from '../components/TaskList';
import NotFound from '../components/NotFound';
import TaskEdit from '../components/TaskEdit';
import NavBar from '../components/NavBar';

const routes = (
    <Router basename="/react-2022A/">
        <NavBar />
        <Routes>
            <Route path="/tasks/"  element={<TaskList />} />
               
            <Route path="/about"  element={<About />} >
                <Route path="edit" element={<TaskEdit />} />
            </Route>
            <Route path="/about/:id"  element={<About />} />

            <Route path="/"  element={<Home />}/>
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
)

export default routes;