import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { router } from './Router/routes';
import { RouterProvider } from 'react-router-dom';
import { UserProvider } from './Provider/userProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <RouterProvider router={router} />
    </UserProvider>
);

