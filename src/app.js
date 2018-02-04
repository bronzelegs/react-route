import React, {Component} from 'react';
import logo from './logo.svg';
import './app.css';
import Weather from './weather.js';
import News from './news.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Card, Icon, Item, Image} from 'semantic-ui-react'

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: "React App"
		};
	}

	render() {
		return (
			<div className="App">
				<Router basename="/react">
					<div>
						<ul className="navbar">
							<li className="branding">{this.state.name}</li>
							<li><Link to="/about">About</Link></li>
							<li><Link to="/weather">Weather</Link></li>
							<li><Link to="/news">News</Link></li>
							<li><Link to="/home">Home</Link></li>
						</ul>
						<Route exact path="/" component={Home}/>
						<Route path="/home" component={Home}/>
						<Route exact path="/weather" component={Weather}/>
						<Route exact path="/news" component={News}/>
						<Route path="/about" component={About}/>
					</div>
				</Router>
			</div>

		)
	}
}

// must have the dedault route component in the same file or react complains about rendering more than one child

class Home extends Component {

	render() {
		return (
			<div className="topsection">
				<h2>
					Welcome to a simple react app.
				</h2>
				<p>I made this for fun, all in all react is pretty simple. </p>
				<p>You can display the weather <Link to="/weather">Weather</Link> or read the New York Times 
					<Link to="/news">News</Link> feed.
				</p>

				<p>
					For information about this litle app check the <Link to="/about">About</Link> page.
				</p>
				<img src={logo} className="App-logo" alt="logo"/>

			</div>

		)
	}
}

class About extends Component {
	render() {
		return (
			<div className="section">
				<h2>About</h2>
				<p className="about">

					<p>This is a simple react app using some basic things, a router, http, and etc.</p>
					<p>I guess this passes for a 'hello world' for react.</p>
					<p>Components used:</p>
					<div>
						<ul className="nobullets">
							<li>axios async for http get <a href="https://www.npmjs.com/package/axios">Axios</a></li>
							<li>react-router-browser for the routing <a
								href="https://www.npmjs.com/package/react-router">React
								Router</a></li>
						</ul>
					</div>
				</p>
			</div>
		)
	}
}


export default App;
