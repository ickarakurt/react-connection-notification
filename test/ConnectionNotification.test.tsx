import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ConnectionNotification from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ConnectionNotification />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
