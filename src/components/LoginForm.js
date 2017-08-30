import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
    onButtonPress() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@user.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="psswrd"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Log the fuck in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}
const styles ={
errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
}
};
const mapStateToProps = ({ auth }) => {
    const { email, password, error } = auth;

    return { email, password, error };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);