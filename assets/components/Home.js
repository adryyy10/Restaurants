import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch,Redirect, Link, withRouter} from 'react-router-dom';
import Restaurants from './Restaurants';
import Header from './Header';

    
class Home extends Component {
    
    render() {
        return (
            <div>
                <Router>
                    <Header/>
                    <Switch>
                        <Route path="/" component={Restaurants}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
    
export default Home;