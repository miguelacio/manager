import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { employeesFetch } from "../actions";
import { ListView, Text, View } from 'react-native';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        //nextProps are the next set of props that this component will be rendered with, 
        //this.props is still the old set of props
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.employees);
    }
    render() {
        console.log(this.props);
        return (
            <View>
                <Text> employeeeeeee</Text>
                <Text> employeeeeeee</Text>
                <Text> employeeeeeee</Text>
                <Text> employeeeeeee</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {

    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });

    return { employees };
};

export default connect(null, { employeesFetch })(EmployeeList);