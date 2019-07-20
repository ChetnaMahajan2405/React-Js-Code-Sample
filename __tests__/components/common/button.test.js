import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

// Component to be tested
import { Button } from '../../../src/components/common';

describe('Button render()', () => {
    it('Snapshot for Button', () => {
        const output = shallow(<Button/>);
        expect(toJson(output)).toMatchSnapshot();
    });

    it('number of component is one', () => {
        const wrapper = shallow(<Button />);
        expect(wrapper.find('input')).toHaveLength(1)
    });
})