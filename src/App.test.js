import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
  render(<App />);
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(0);
});

test('minus button has correct text', () => {
  render(<App/>);
  const buttonElement = screen.getByTestId('minus_button');
  expect(buttonElement).toHaveTextContent("-");
})

test('plus button has correct text', () => {
  render(<App/>);
  const buttonElement = screen.getByTestId('plus_button');
  expect(buttonElement).toHaveTextContent('+');
})

test('When the + button is pressed, the counter changes to 1', ()=> {
  render(<App />);
  const buttonElement = screen.getByTestId("plus_button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent("1");
})

test('When the - button is pressed, the counter changes to -1', ()=> {
  render(<App />);
  const buttonElement = screen.getByTestId("minus_button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent("-1");
})

test("on/off button has blue color", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("on/off_button");
  expect(buttonElement).toHaveStyle({backgroundColor: 'blue'});
})

test("When the on/off button is clicked, on/off button prevents the -,+ button from being pressed", () => {
  render(<App />);
  const onOffButtonElement = screen.getByTestId("on/off_button");
  fireEvent.click(onOffButtonElement);
  const plusButtonElement = screen.getByTestId("plus_button");
  expect(plusButtonElement).toBeDisabled();
})