import React from 'react';
import { Route, Link } from 'react-router-dom';
import { test1, test2, test3, test4 } from './screens';

class App extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">test1</Link>
                    </li>

                    <li>
                        <Link to="/test2">test2</Link>
                    </li>

                    <li>
                        <Link to="/test3">test3</Link>
                    </li>

                    <li>
                        <Link to="/test4">test4</Link>
                    </li>
                </ul>
                <hr />
                <Route exact path="/" component={test1} />
                <Route exact path="/test2" component={test2} />
                <Route exact path="/test3" component={test3} />
                <Route exact path="/test4" component={test4} />
            </div>
        );
    }
}

export default App;
