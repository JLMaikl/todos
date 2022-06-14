import { render, screen } from '@testing-library/react';
import Button from './button';

const getTypeAction = jest.fn();

const title = 'All';

describe('Button component', () => {
  it('Button renders', () => {
    render(<Button title={title} getTypeAction={getTypeAction} />);

    expect(screen.getByText('All')).toBeInTheDocument();
  });
});
