import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

// Component to be tested
import { Home } from '../../src/components';
import { Button } from '../../src/components/common';

const initialState = {
  session: {
    autheticated: true,
    checked: true,
    user: {
      name: 'Luke Skywalker'
    }
  },
  search: {
    data: []
  }
};

const mockedStore = configureStore(initialState);

jest.mock('../../src/redux/services/service');

describe('<Home /> renders()', () => {
  it('Home component spanshot', () => {
    const wrapper = shallow(
      <Home store={mockedStore} />
    );
    const component = wrapper.dive();
    expect(toJson(component)).toMatchSnapshot();
  });


});
