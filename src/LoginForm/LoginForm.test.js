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

  it('should update the appropriate states for user profile when handleChange is called', () => {
    wrapper = shallow(<LoginForm setupUserProfile={mockSetupUserProfile} />);

    const mockEvent1 = {
      target: {
        name: 'name',
        value: 'Peerat'
      }
    };

    const mockEvent2 = {
      target: {
        name: 'quote',
        value:
          "If there ever comes a day when we can't be together, keep me in your heart. I'll stay there forever."
      }
    };

    const mockEvent3 = {
      target: {
        name: 'rank',
        value: 'Jedi Knight'
      }
    };

    wrapper.instance().handleChange(mockEvent1);
    expect(wrapper.state('name')).toEqual('Peerat');

    wrapper.instance().handleChange(mockEvent2);
    expect(wrapper.state('quote')).toEqual(
      "If there ever comes a day when we can't be together, keep me in your heart. I'll stay there forever."
    );

    wrapper.instance().handleChange(mockEvent3);
    expect(wrapper.state('rank')).toEqual('Jedi Knight');
  });

  it('should call on setupUserProfile when submit to login to movies page is clicked (handleSubmit)', () => {
    wrapper = shallow(<LoginForm setupUserProfile={mockSetupUserProfile} />);
    wrapper.setState({
      name: 'Peerat',
      quote: 'Winnie the Pooh!',
      rank: 'Jedi Knight'
    });
    wrapper
      .find('button')
      .at(0)
      .simulate('click');

    expect(mockSetupUserProfile).toHaveBeenCalled();
  });
});
