import TestRenderer from 'react-test-renderer';
import Review from './Review';

describe('Header', () => {
  test('non-shallow render', () => {
    // eslint-disable-next-line new-cap
    const element = new TestRenderer.create(
      <Review />,
    );
    expect(element.toJSON()).toMatchSnapshot();
  });
});
