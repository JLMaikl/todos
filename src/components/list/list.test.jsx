import { render, screen } from '@testing-library/react';
import List from './list';

const data = [
    {
     item: 'a',
     isChecking: false,
     id: 1,
   },
    {
     item: 'b',
     isChecking: false,
     id:2,
   },
    {
     item: 'c',
     isChecking: false,
     id: 3,
   },
];

const checked = false;

const handleChange = jest.fn();

describe('List component', () => {
  it('List renders', () => {
    render(<List list={data} checked={checked} handleChange={handleChange} />);

    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('List renders without data', () => {
    render(<List />);

    expect(screen.queryByRole('list')).toBeNull();
  })
});
