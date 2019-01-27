import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    )
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('should have the proper default state', () => {
    expect(wrapper.state()).toEqual({
      category: '',
      crawl: [],
      dataIsLoaded: null,
      favorites: [],
      people: [],
      planets: [],
      vehicles: []
    })
  })
  
})