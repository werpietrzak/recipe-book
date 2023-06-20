import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AddNewRecipe, Recipes } from './routes';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Recipes />,
    },
    {
        path: '/add',
        element: <AddNewRecipe />,
    },
]);

const App = () => (
    <div>
        <RouterProvider router={router} />
    </div>
);

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
