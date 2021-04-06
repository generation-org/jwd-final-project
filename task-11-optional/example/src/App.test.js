import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Task App', () => {
  describe('Render the tasks', () => {
    it('render the page correctly', () => {
      const { getByText, getByLabelText } = render(<App />);

      getByText('Task App');
      getByLabelText('Name');
      getByLabelText('Description');
      getByLabelText('Assigned To');
      getByLabelText('Due Date');
      getByText('Submit');
    });

    it('add a task with the form, and render it to the page', () => {
      const { getByText, getByLabelText } = render(<App />);
      const name = getByLabelText('Name');
      const description = getByLabelText('Description');
      const assignedTo = getByLabelText('Assigned To');
      const dueDate = getByLabelText('Due Date');
      const submit = getByText('Submit');

      userEvent.type(name, 'Trash Day');
      userEvent.type(description, 'Mate, you need to take out the bins');
      userEvent.type(assignedTo, 'Aaron Byrom');
      userEvent.type(dueDate, '2021-01-01');
      userEvent.click(submit);

      getByText('Trash Day');
      getByText('Mate, you need to take out the bins');
    });

    it('should not render an invalid task', () => {
      const { getByText, getByLabelText, queryByText } = render(<App />);
      const name = getByLabelText('Name');
      const description = getByLabelText('Description');
      const assignedTo = getByLabelText('Assigned To');
      const dueDate = getByLabelText('Due Date');
      const submit = getByText('Submit');

      userEvent.type(name, '1');
      userEvent.type(description, '2');
      userEvent.type(assignedTo, '3');
      userEvent.type(dueDate, '2019-01-01');
      userEvent.click(submit);

      expect(queryByText('1')).toBeNull();
      expect(queryByText('2')).toBeNull();
    });
  });
});
