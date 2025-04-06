import React from 'react';
import { render, screen } from '@testing-library/react';
import { Authenticator } from '@aws-amplify/ui-react';
import App from './App';

// Mock the Amplify Auth
jest.mock('aws-amplify', () => ({
  Amplify: {
    configure: jest.fn()
  }
}));

// Mock withAuthenticator HOC
jest.mock('@aws-amplify/ui-react', () => ({
  ...jest.requireActual('@aws-amplify/ui-react'),
  withAuthenticator: (Component: React.ComponentType) => {
    return function WithAuthenticatorMock(props: any) {
      return (
        <Component
          {...props}
          signOut={() => {}}
          user={{ username: 'testuser' }}
        />
      );
    };
  }
}));

test('renders bucket list tracker heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/bucket list tracker/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders theme toggle button', () => {
  render(<App />);
  const toggleButton = screen.getByRole('button', { name: /dark mode|light mode/i });
  expect(toggleButton).toBeInTheDocument();
});

