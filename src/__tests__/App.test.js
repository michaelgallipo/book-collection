import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('prints out the book titles from the api', () => {
  const wrapper = mount(<App />)

  console.log(wrapper.debug())
})