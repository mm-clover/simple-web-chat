import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import ChatForm from './user-form';


describe('Chat Form', () => {
  it('should render input for Chat From', () => {
    render(<ChatForm />);
    const inputEl = screen.getByTestId("chat-input");
    expect(inputEl).toBeInTheDocument();
  });
});