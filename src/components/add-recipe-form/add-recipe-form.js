import React, { useState } from 'react';

export const AddRecipeForm = () => {
    const [ingredients, setIngredientFields] = useState([]);
    const [steps, setStepFields] = useState([]);

    const addNewIngredientField = () => {
        setIngredientFields([
            ...ingredients,
            {
                fieldId: `ingredient-${ingredients.length + 1}`,
            },
        ]);
    };

    const removeIngredientField = id => {
        const updatedFields = ingredients.filter(item => item.fieldId !== id);
        setIngredientFields(updatedFields);
    };

    const addNewStepField = () => {
        setStepFields([
            ...steps,
            {
                fieldId: `step-${steps.length + 1}`,
            },
        ]);
    };

    const removeStepField = id => {
        const updatedFields = steps.filter(item => item.fieldId !== id);
        setStepFields(updatedFields);
    };

    return (
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" />
            </div>
            {ingredients.map(({ fieldId }) => (
                <div key={fieldId}>
                    <label htmlFor={`${fieldId}_name`}>Name</label>
                    <input id={`${fieldId}_name`} type="text" />
                    <label htmlFor={`${fieldId}_qty`}>Qty</label>
                    <input id={`${fieldId}_qty`} type="number" />
                    <label htmlFor={`${fieldId}_measurement`}>
                        Measurement
                    </label>
                    <input id={`${fieldId}_measurement`} type="text" />
                    <button
                        type="button"
                        value={fieldId}
                        onClick={e => removeIngredientField(e.target.value)}
                    >
                        Remove
                    </button>
                </div>
            ))}
            <div>
                <button type="button" onClick={addNewIngredientField}>
                    Add ingredient
                </button>
            </div>
            {steps.map(({ fieldId }) => (
                <div key={fieldId}>
                    <label htmlFor={fieldId}>Description</label>
                    <textarea id={fieldId} />
                    <button
                        type="button"
                        value={fieldId}
                        onClick={e => removeStepField(e.target.value)}
                    >
                        Remove
                    </button>
                </div>
            ))}
            <div>
                <button type="button" onClick={addNewStepField}>
                    Add step
                </button>
            </div>
            <input type="submit" />
        </form>
    );
};
