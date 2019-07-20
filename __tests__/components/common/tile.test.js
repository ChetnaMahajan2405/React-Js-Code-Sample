import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

// Component to be tested
import { Tile, Image } from '../../../src/components/common';

describe('Tile render()', () => {
    it('Snapshot for Tile', () => {
        const output = shallow(<Tile/>);
        expect(toJson(output)).toMatchSnapshot();
    });

    it('Check for inner element Image in Tile', () => {
        const wrapper = shallow(<Tile/>);
        expect(wrapper.find(Image).exists()).toBeTruthy();
    });

    it('displays the Tile text passed on props', function () {
        const wrapper = shallow(<Tile header="test" text="text"/>);

        expect(wrapper.find('.header').text()).toContain('test');
        expect(wrapper.find('.sub-header').text()).toContain('text');

    }); 

})