import TestRenderer from 'react-test-renderer';
import Add from './Add';

describe('Header', () => {
  test('non-shallow render', () => {
    // eslint-disable-next-line new-cap
    const element = new TestRenderer.create(
      <Add />,
    );
    expect(element.toJSON()).toMatchSnapshot();
  });
});
