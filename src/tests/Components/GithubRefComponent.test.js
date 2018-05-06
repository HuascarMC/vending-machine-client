import React from 'react';
import GitHubRefComponent from '../../Components/GitHubRefComponent'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<GitHubRefComponent />);
});

it('should render github-logo div', () => {
  const wrapper = shallow(<GitHubRefComponent/>);
  const div = wrapper.find('.github-logo');
  expect(div.exists()).toEqual(true);
});

it('should render hyperlink tag', () => {
  const wrapper = shallow(<GitHubRefComponent/>);
  const a = wrapper.find('a');
  expect(a.exists()).toEqual(true);
});

it('should have correct href in hyperlink tag', () => {
  const wrapper = shallow(<GitHubRefComponent/>);
  const src = 'https://github.com/HuascarMC/vending-machine-server/tree/heroku-deploy'
  const a = wrapper.find('a');
  expect(a.prop('href')).toEqual(src);
});
