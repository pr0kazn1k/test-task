import React from 'react'
import { Link } from 'react-router'
import Store from '../store'

export default class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: {},
            department: {},
        }
    }
    componentDidMount() {
        let employee = Store.getById('employees', this.props.params.id);
        let department = Store.getById('departments', employee.department);
        this.setState({employee, department});
    }
    render() {
        return (
            <div>
                <ol className="breadcrumb">
                    <li><Link to='/departments'>Список отделов</Link></li>
                    <li><Link to={'/departments/' + this.state.employee.department + '/employees'}>{this.state.department.name}</Link></li>
                    <li className="active">{this.state.employee.name}</li>
                </ol>
                <div className="panel panel-default">
                    <div className="panel-heading">Сотрудник</div>
                    <div className="panel-body">
                        <div className="media">
                            <a className="pull-left">
                                <img className="media-object" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZWVlIi8+PHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iMzIiIHk9IjMyIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+NjR4NjQ8L3RleHQ+PC9zdmc+" />
                            </a>
                            <div className="media-body">
                                <h4 className="media-heading">{this.state.employee.name}</h4>
                                <ul>
                                <li>ID: <strong>{this.state.employee.id}</strong></li>
                                <li>Телефон: <strong>{this.state.employee.phone}</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
