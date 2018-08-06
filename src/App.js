import React, { Component } from 'react';
import './App.css';
import { Button, Card } from 'semantic-ui-react'

const GITHUB_USER = 'https://api.github.com/users/mikaiyl'

class App extends Component {

    state = {
        cardActive: false,
    }

    componentDidMount() {
        fetch( GITHUB_USER )
            .then( res => res.json() )
            .then( json => this.setState( { userInfo: json } ))
    }

    handleClick (e) {
        if ( e.type === 'click' ) {
            this.setState( ( oldState, props ) => ({ cardActive: !oldState.cardActive }) )
        }
    }

    render() {
        return (
            <div className='App'>
                <Button primary onClick={ this.handleClick.bind( this ) } id='toggleB' >Toggle User</Button>

                { this.state.cardActive ? (
                    <Card id='ghcard'>
                        <div class='image'>
                            <img src={ this.state.userInfo.avatar_url } alt={ this.state.userInfo.login }/>
                        </div>
                        <div class="content">
                        <div className="header">{ this.state.userInfo.name }</div>
                        <div className="meta">Joined in { (new Date(Date.parse(this.state.userInfo.created_at ))).getUTCFullYear()}</div>
                        <div className="description">{ this.state.userInfo.bio }</div>
                        </div>
                    </Card>) : ''}
            </div>
        );
    }
}

export default App;
