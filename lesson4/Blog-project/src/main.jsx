import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { store } from './app/store.js';
import {Provider} from 'react-redux';
import { fetchPosts } from './features/posts/PostsSlice.js';
import { fetchUsers } from './features/users/UsersSlice.js';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

store.dispatch(fetchUsers());
store.dispatch(fetchPosts())

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router >
        <Routes>
          <Route path='/*' element={<App  />} />
        </Routes>

      </Router>

    </Provider>

  </StrictMode>,
)
