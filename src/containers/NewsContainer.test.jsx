import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsContainer from './NewsContainer.jsx';
import { rest } from 'msw';
import { setupServer } from 'msw/node';


// const server = setupServer(
//   rest.get(
//     'https://newsapi.org/v2/everything',
//     (req, res, ctx) => {
//       return res(
//         ctx.json({ articles: [{
//           title: 'Everything is going wrong',
//           author: 'most people',
//           description: 'title says it all'
//         }]
//         })
//       );
//     }
//   )
// );

describe('ArticlesContainer', () => {
//   beforeAll(() => server.listen());
//   afterAll(() => server.close());

  it('should display a list of news articles', async () => {
    render(<NewsContainer />);
    
    const input = screen.getByRole('textbox', { name: 'search-bar' });
    userEvent.type(input, '{selectall}{del}yes');
    
    const submitButton = screen.getByRole('button', { name: 'filter-stories' });
    userEvent.click(submitButton);
    const ul = await screen.findByRole('list', { name: 'stories' });
        
    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
