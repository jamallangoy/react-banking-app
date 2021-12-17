import { render, fireEvent, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { api } from './api'
import App from './App';

// mock API
const mockCreateItem = (api.createItem = jest.fn()) 

// test('add amount', async () => {
//   const inputText = 200;
//   mockCreateItem.mockResolvedValueOnce(inputText);
//   const { getByPlaceholderText, getByText } = render(<App/>)

//   // Enter Content, interact with page
//   const input = getByPlaceholderText('Please enter amount')
//   fireEvent.change(input, {target:{value: "200"}})

//   await waitFor(() => getByText(input));

//   // expect(mockCreateItem).toBeCalledTimes(1);
//   expect(mockCreateItem).toBeCalledWith(
//     expect.stringContaining('200')
//   )


// }) 

test('add amount to input', () => {
  const { getAllByText, getByPlaceholderText, getByText} = render(<App/>)

  getAllByText('Big Bank & Savings')
  const input = getByPlaceholderText('Please enter amount')
  fireEvent.change(input, {target:{value: 200}})
  fireEvent.click(getByText('Submit Deposit'))
   
 
  //confirm data --- (returns back to placeholder and submit button)
  getByPlaceholderText('Please enter amount')
  getByText('Submit Deposit')
 
})

test('user-events allows users to add...', () => {
  const { getByPlaceholderText, getByText } = render(<App/>)

  const input = getByPlaceholderText('Please enter amount');
  const button = getByText('Submit Deposit');

  userEvent.type(input, '200');
  userEvent.click(button); 

  getByPlaceholderText('Please enter amount');
  getByText('Submit Deposit');


})