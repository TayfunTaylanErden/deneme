import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import homepage from '../imports/homepage.jsx';
import Homepage from "../imports/homepage";

const App = () => (
    <MuiThemeProvider>
        <Homepage />
    </MuiThemeProvider>
);

Meteor.startup(() => {



    ReactDOM.render(
        <App />,
        document.getElementById('render-target')

    );});