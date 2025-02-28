import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { repositoryStore } from './stores/RepositoryStore';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <BrowserRouter>
    <Provider repositoryStore={repositoryStore}>
      <App />
    </Provider>
  </BrowserRouter>,
);
