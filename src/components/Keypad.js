import React, {Component} from 'react';

export default class Keypad extends Component {

    print = () => {
        console.log('Entering password...')
    }

    render() {
        return (
            <input type='password' onKeyUp={this.print} />
        )
    }
}