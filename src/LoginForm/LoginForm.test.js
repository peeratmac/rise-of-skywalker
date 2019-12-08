import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';

describe('LOGIN FORM', () => {
  let wrapper;

  const mockSetupUserProfile = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<LoginForm setupUserProfile={mockSetupUserProfile} />);
  });

  it('should match the LoginForm Component Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
