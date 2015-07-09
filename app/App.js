import React from 'react';
import Router from 'react-router';
import routes from './config/routes';
//instead of a static main component have a root component
// so whenever a route changes it will detect that and pass the component we want to render


Router.run(routes, function(Root) {
    React.render(<Root />, document.getElementById('app'));
});