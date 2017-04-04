import React from 'react'
import { Link } from 'react-router'
import Store from '../store'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        Store.init();
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-static-top">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand">Logo</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><Link to='/'>Dashboard</Link></li>
                            <li><Link to='/departments'>Список отделов</Link></li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
