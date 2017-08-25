import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm'

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyCOMBE8ymVhhcjiVVww9noXyUWZHlX4tGg',
            authDomain: 'manager-f420b.firebaseapp.com',
            databaseURL: 'https://manager-f420b.firebaseio.com',
            projectId: 'manager-f420b',
            storageBucket: '',
            messagingSenderId: '276874021738'
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <LoginForm />
                </View>
            </Provider>
        );
    }
}
export default App;