import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './form';

const onChange = jest.fn();
const handleSubmit = jest.fn();

describe('Form component', () => {
  it('Form renders', () => {
    render(<Form item='' setItem={onChange} handleSubmit={handleSubmit} />);

    expect(screen.getByPlaceholderText('What needs to be done?')).toBeInTheDocument();
  });

  it('onChange works', () => {
    render(<Form item="" setItem={onChange} handleSubmit={handleSubmit} />);

    userEvent.type(screen.getByRole('textbox'), 'React');

    expect(onChange).toHaveBeenCalledTimes(5);
  });
});
