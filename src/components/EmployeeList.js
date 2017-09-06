import React, { Component } from 'react';
import {connect} from 'react-redux';
import { employeesFetch } from "../actions";
import { Text, View } from 'react-native';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();
    }
    render(){
        return(
            <View>
                <Text> employeeeeeee</Text>
                <Text> employeeeeeee</Text>
                <Text> employeeeeeee</Text>
                <Text> employeeeeeee</Text>
            </View>
        );
    }
}

export default connect(null, { employeesFetch })(EmployeeList);