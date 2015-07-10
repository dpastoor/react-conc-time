import React from 'react';
// for some reason webpack will not render this unless route handler is in { }
// probably as it is in react-router.RoutHandler
import {RouteHandler, Link} from 'react-router';
class Main extends React.Component {

	render() {
		return (
			<div className="main-container">
				{/*
				//this container will always be shown
					*/}
				<nav className="navbar navbar-default" role="navigation">
					<div className="navbar-header">
						<Link className="navbar-brand" to="app">Magellan</Link>
					</div>
					<div className="navbar-collapse collapse">
						<ul className="nav navbar-nav">
							<li><Link to="app">Home</Link></li>
							<li><Link to="ctarray">facet-conctime</Link></li>
							<li><Link to="ctgroup">conctime</Link></li>
							<li><Link to="cttest">testct</Link></li>
						</ul>
					</div>
				</nav>


				<div className="container">
					{/*
						this is what will be swapped out by the router based on
						what child path we hit
					 */}

					<RouteHandler {...this.props}/>
				</div>
			</div>
		);
	}
}

export default Main;
