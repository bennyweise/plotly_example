import React, {Component} from 'react';
import {Draggable} from '../src';

class Demo extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        };
    }

    render() {
        return (
            <div>
                <h1>plotly-example Demo</h1>

                <hr/>
                <h2>Draggable</h2>
              <Draggable>
                <div className="box">I can be dragged anywhere</div>
              </Draggable>
                <hr/>
            </div>
        );
    }
}

export default Demo;
