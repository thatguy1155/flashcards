import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import Header from './header';

describe('Header', () => {
  test('non-shallow render', () => {
    // eslint-disable-next-line new-cap
    const element = new TestRenderer.create(
      <Router>
        <Header />
      </Router>,
    );
    expect(element.toJSON()).toMatchSnapshot();
  });

  it('says Flash Cards', () => {
    const header = render(
      <Router>
        <Header />
      </Router>,
    );
    const msg = header.getByText('Flash Cards');
    expect(msg).toBeInTheDocument(1);
  });
});
