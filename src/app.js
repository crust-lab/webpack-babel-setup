import React from 'react';
import ReactDOM from 'react-dom';

import './styles.scss';

class App extends React.Component {
    render() {
        return (
            <div>Hello World App!</div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
