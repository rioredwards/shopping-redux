import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import MainHeader from './components/Layout/MainHeader.js';
import store from './store/index.js';
import Products from './components/Shop/Products.js';

test('renders header text', () => {
  // Arrange
  render(
    <Provider store={store}>
      <MainHeader />
    </Provider>
  );

  // Act
  // ... nothing

  // Assert
  const headerText = screen.getByText(/ReduxCart/i);
  expect(headerText).toBeInTheDocument();
});

test('renders products', () => {
  // Arrange
  render(
    <Provider store={store}>
      <Products />
    </Provider>
  );

  // Assert
  const productsList = screen.getByRole('list');
  expect(productsList).toBeInTheDocument();
});
