import TestRenderer from 'react-test-renderer';
import Card from './components/card/card';
import {
  act, render, screen, fireEvent, within,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Review from './Review';

describe('Header', () => {
  test('non-shallow render', () => {
    // eslint-disable-next-line new-cap
    const element = new TestRenderer.create(
      <Review />,
    );
    expect(element.toJSON()).toMatchSnapshot();
  });

  it('displays and English or Korean word', () => {
    const card = render(<Card english="hey" korean="안녕" language="eng" />);

    const display = card.getByTestId('display');
    const checkButton = card.getByTestId('check-button');
    const { getByText } = within(display);

    expect(getByText('hey')).toBeInTheDocument();
    act(() => {
      userEvent.click(checkButton);
    });
    expect(getByText('안녕')).toBeInTheDocument();
  });
});
