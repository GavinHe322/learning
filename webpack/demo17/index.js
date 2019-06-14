import React from 'react'
import { render} from 'react-dom'
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom'

import './app.css'

class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <ul>
                        <li> <Link to="/app">Dashboard</Link></li>
                        <li> <Link to="/inbox">InBox</Link></li>
                        <li> <Link to="/calendar">Calendar</Link></li>
                    </ul>
                    Logged in as Jane
                </header>
                <main>
                    <Switch>
                        <Route exact path="/" component={Dashboard}/>
                        <Route exact path="/app" component={Dashboard}/>
                        <Route exact path="/inbox" component={InBox}/>
                        <Route exact path="/calendar" component={Calendar}/>
                        <Route exact path="/*" component={Dashboard}/>
                    </Switch>
                </main>
            </div>
        )
    }
}


class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <p>Dashboard</p>
            </div>
        )
    }
}


class InBox extends React.Component {
    render() {
        return (
            <div>
                <p>InBox</p>
            </div>
        )
    }
}

class Calendar extends React.Component {
    render() {
        return (
            <div>
                <p>Calendar</p>
            </div>
        )
    }
}

render((
    <BrowserRouter>
        <Route path="/" component={App}/>
    </BrowserRouter>
), document.querySelector("#app"))