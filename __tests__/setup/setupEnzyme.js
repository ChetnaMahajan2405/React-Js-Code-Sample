import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';
import 'babel-polyfill';

// Mocking the global.fetch included in React Native
global.fetch = jest.fn();

// Helper to mock a success response (only once)
fetch.mockResponseSuccess = (body) => {
  fetch.mockImplementationOnce (
    () => Promise.resolve({json: () => Promise.resolve(JSON.parse(body))})
  );
};

// Helper to mock a failure response (only once)
fetch.mockResponseFailure = (error) => {
  fetch.mockImplementationOnce(
    () => Promise.reject(error)
  );
};
 
Enzyme.configure({ adapter: new Adapter() });