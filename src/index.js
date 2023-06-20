import React from 'react';
import { createRoot } from 'react-dom/client';
import { AddRecipeForm } from './components/add-recipe-form';

const App = () => (
    <div>
        <AddRecipeForm />
    </div>
);

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
