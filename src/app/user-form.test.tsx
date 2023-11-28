import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import UserFormDialog from './user-form';


describe('User Form', () => {
  it('should render user name input', () => {
    render(<UserFormDialog />);
    const inputEl = screen.getByTestId("username-input");
    expect(inputEl).toBeInTheDocument();
  });
});