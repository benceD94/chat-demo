import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserItem, { Props } from './';


const mockUser = {
  name: "Test User",
  id: 'user1'
};
const mockMessageUser = jest.fn();

const defaultJsx = (overrides: Partial<Props> = {}) => {
  return (
    <UserItem
      user={mockUser}
      onMessageUser={mockMessageUser}
      {...overrides}
    />
  );
};

test('renders UserItem with initial if no image', () => {
  render(defaultJsx());

  const userInitial = screen.getByText('TU');
  const userName = screen.getByText('Test User');
  expect(userName).toBeInTheDocument();
  expect(userInitial).toBeInTheDocument();
});

test('renders UserItem with image', () => {
  render(defaultJsx({
    user: {
      ...mockUser,
      image: 'mockImageUrl.com'
    }
  }));

  const userInitial = screen.queryByText('TU');
  const userName = screen.getByText('Test User');
  const userImage = screen.getByTestId('user-image')
  expect(userName).toBeInTheDocument();
  expect(userImage).toBeInTheDocument();
  expect(userInitial).not.toBeInTheDocument();
});

test('renders call onMessageUser prop when action is clicked', () => {
  render(defaultJsx());

  const userActionButton = screen.getByTestId('message-user-button');
  fireEvent.click(userActionButton);
  expect(mockMessageUser).toHaveBeenCalledWith(mockUser);
});
