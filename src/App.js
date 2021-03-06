import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';
import Router from './Router';

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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store ={store}>
                <Router/>
            </Provider>
        );
    }
}
export default App;