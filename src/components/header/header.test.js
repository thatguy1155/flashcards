import { render } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import Header from './header';

describe('Header', () => {
  test('non-shallow render', () => {
    // eslint-disable-next-line new-cap
    const element = new TestRenderer.create(
      <Header />,
    );
    expect(element.toJSON()).toMatchSnapshot();
  });

  it('says Flash Cards', () => {
    const header = render(<Header />);
    const msg = header.getByText('Flash Cards');
    expect(msg).toBeInTheDocument(1);
  });
});
