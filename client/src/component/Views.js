import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import JournalEntry from '../component/journal/JournalEntry'
import JournalForm from './journal/JournalForm'
import JournalEditForm from './journal/JournalEditForm'

class Views extends Component {

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />
                <Route exact path="/entries" render={props => {
                    if (this.props.user) {
                        return <JournalEntry {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/entries/:entryId(\d+)" render={(props) => {
                    return <JournalDetail entryId={parseInt(props.match.params.entryId)} {...props} />
                }} />
                <Route path="/entries/new" render={(props) => {
                    return <JournalForm {...props} />
                }} />
                <Route
                   exact path="/entries/:entryId(\d+)/edit" render={props => {
                        return <JournalEditForm {...props} />
                    }}
                />
                </React.Fragment>
        )
    }
}

export default withRouter(Views);