import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import './styles/app.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
}
 
ReactDOM.render(<Router><Home/></Router>, document.getElementById('root'))