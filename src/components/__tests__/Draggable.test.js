import React from 'react';
import {shallow} from 'enzyme';
import Draggable from '../Draggable';

describe('Draggable', () => {

    it('renders', () => {
      const component = shallow(<Draggable><div className="box">I can be dragged anywhere</div></Draggable>);
        expect(component).to.be.ok;
    });
});
