import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import Login from './Login';
import { auth } from '../Firebase';
import rootReducer from '../reducers'; // Importujte vaš root reducer

jest.mock('../Firebase', () => ({
  auth: {
    signInWithEmailAndPassword: jest.fn(),
  },
}));

const store = createStore(rootReducer);

describe('Login Component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login setToggleRegistration={jest.fn()} />
        </MemoryRouter>
      </Provider>
    );
  });

  test('renders Login component', () => {
    expect(screen.getByPlaceholderText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Šifra/i)).toBeInTheDocument();
  });

  test('validates email format', () => {
    const emailInput = screen.getByPlaceholderText(/E-mail/i);
    fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
    fireEvent.click(screen.getByText(/Nastavite/i));
    expect(screen.getByText(/Email nije validan./i)).toBeInTheDocument();
  });

  test('validates password length', () => {
    const passwordInput = screen.getByPlaceholderText(/Šifra/i);
    fireEvent.change(passwordInput, { target: { value: '123' } });
    fireEvent.click(screen.getByText(/Nastavite/i));
    expect(screen.getByText(/Šifra mora imati minimum 6 karaktera./i)).toBeInTheDocument();
  });

  test('calls login function on button click with correct credentials', async () => {
    const emailInput = screen.getByPlaceholderText(/E-mail/i);
    const passwordInput = screen.getByPlaceholderText(/Šifra/i);
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    
    fireEvent.click(screen.getByText(/Nastavite/i));
    
    expect(auth.signInWithEmailAndPassword).toHaveBeenCalledWith(auth, 'test@example.com', 'password123');
  });

  test('shows error message with incorrect credentials', async () => {
    auth.signInWithEmailAndPassword.mockImplementation(() => {
      throw { code: 'auth/invalid-credential' };
    });
    
    const emailInput = screen.getByPlaceholderText(/E-mail/i);
    const passwordInput = screen.getByPlaceholderText(/Šifra/i);
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } });
    
    fireEvent.click(screen.getByText(/Nastavite/i));
    
    expect(await screen.findByText(/Netačni podaci./i)).toBeInTheDocument();
  });
});