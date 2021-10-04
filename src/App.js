import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Contact from './components/Contact/Contact';
import NotFound from './components/Not Found/NotFound';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/home'>
						<Home></Home>
					</Route>
					<Route path='/about'>
						<About></About>
					</Route>
					<Route path='/courses'>
						<Courses></Courses>
					</Route>
					<Route path='/contact'>
						<Contact></Contact>
					</Route>
					<Route>
						<NotFound></NotFound>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
