import React from 'react';
// for some reason webpack will not render this unless route handler is in { }
// probably as it is in react-router.RoutHandler
import {RouteHandler} from 'react-router';
class Main extends React.Component {
	render() {
		return (
			<div className="main-container">
				{/*
				//this container will always be shown
					*/}
				<nav className="navbar navbar-default" role="navigation">
					<div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
						MENU
					</div>
				</nav>


				<div className="container">
					{/*
						this is what will be swapped out by the router based on
						what child path we hit
					 */}

					<RouteHandler />
				</div>
			</div>
		);
	}
}

export default Main;
