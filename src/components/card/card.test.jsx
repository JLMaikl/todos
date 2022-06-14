import { render, screen } from '@testing-library/react';
import Card from './card';

const item = {
    item: 'a',
    isChecking: false,
    id: 1,
  };

const handleChange = ({ id }) => {
  console.log(id);
};

describe('Card component', () => {
  it('Card renders', () => {
    render(<Card item={item} handleChange={handleChange} />);

    expect(screen.getByText('a')).toBeInTheDocument();
  });
});
