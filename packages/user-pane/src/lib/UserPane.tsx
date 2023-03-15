import {
    Provider,
} from 'react-redux';
import { store } from './store/store';
import React from 'react';
import useStateEventEmitter from './hooks/useStateEventEmitter';
import Configuration from './components/Configuration';

// An example entry point, much like 'App.tsx' would be in a CRA / NextJS solution.
const UserPane: React.FC = () => {
    useStateEventEmitter();

    return (
        <Provider store={store}>
            <Configuration />
        </Provider>
    );
};


export default UserPane;