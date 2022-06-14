import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todo from './todo';



describe('Todo component', () => {
  it('typing in Searchbox works', () => {
    render(<Todo />);

    expect(screen.queryByDisplayValue(/React/)).toBeNull();

    userEvent.type(screen.getByRole('textbox'), 'React');

    expect(screen.getByDisplayValue(/React/)).toBeInTheDocument();
  });  
});
