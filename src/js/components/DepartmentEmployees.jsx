import React from 'react'
import { Link } from 'react-router'
import Store from '../store'

export default class DepartmentEmployees extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            department: {},
        }
    }
    componentDidMount() {
        let id = this.props.params.id;
        let employees = Store.getWhere('employees', 'department', id);
        let department = Store.getById('departments', id);

        this.setState({department, employees});
    }
    render() {
        let employees = this.state.employees.map((item) => {
            return (
                <li key={item.id} className="list-group-item">
                    <Link to={'/employees/' + item.id}>{item.name}</Link>
                </li>
            );
        });

        return (
            <div>
                <ol className="breadcrumb">
                    <li><Link to='/departments'>Список отделов</Link></li>
                    <li className="active">{this.state.department.name}</li>
                </ol>
                <div className="panel panel-default">
                    <div className="panel-heading">Список сотрудников</div>
                    <ul className="list-group">
                        {employees}
                    </ul>
                    <div className="panel-body">
                        Кол-во сотрудников: <strong>{this.state.employees.length}</strong>
                    </div>
                </div>
            </div>
        );
    }
}

