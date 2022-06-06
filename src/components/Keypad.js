import React, {Component} from 'react';
import ConcatenatedModule from 'webpack/lib/optimize/ConcatenatedModule';

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