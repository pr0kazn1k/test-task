import React from 'react'
import { Link } from 'react-router'
import Store from '../store'

export default class Departments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            departments: [],
        }
    }
    componentDidMount() {
        let departments = Store.get('departments');
        this.setState({departments});
    }
    render() {
        let departments = this.state.departments.map(item => {
            return (<li key={item.id} className="list-group-item">
                <Link to={'/departments/' + item.id + '/employees'}>{item.name}</Link>
            </li>);
        });

        return (
            <div className="panel panel-default">
                <div className="panel-heading">Список отделов</div>
                <ul className="list-group">
                    {departments}
                </ul>
            </div>
        );
    }
}
