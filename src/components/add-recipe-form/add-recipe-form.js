import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export const AddRecipeForm = () => {
    const [ingredients, setIngredientFields] = useState([]);
    const [steps, setStepFields] = useState([]);

    const { register, handleSubmit } = useForm();

    const addNewIngredientField = () => {
        setIngredientFields([
            ...ingredients,
            {
                fieldId: ingredients.length,
                fieldKey: `ingredient-${ingredients.length + 1}`,
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
                fieldId: steps.length,
                fieldKey: `step-${steps.length + 1}`,
            },
        ]);
    };

    const removeStepField = id => {
        const updatedFields = steps.filter(item => item.fieldId !== id);
        setStepFields(updatedFields);
    };

    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" {...register('name')} />
            </div>
            {ingredients.map(({ fieldId, fieldKey }) => (
                <div key={fieldKey}>
                    <label htmlFor={`${fieldKey}_name`}>Name</label>
                    <input
                        id={`${fieldKey}_name`}
                        type="text"
                        {...register(`ingredients.${fieldId}.name`)}
                    />
                    <label htmlFor={`${fieldKey}_qty`}>Qty</label>
                    <input
                        id={`${fieldKey}_qty`}
                        type="number"
                        {...register(`ingredients.${fieldId}.qty`)}
                    />
                    <label htmlFor={`${fieldKey}_measurement`}>
                        Measurement
                    </label>
                    <input
                        id={`${fieldKey}_measurement`}
                        type="text"
                        {...register(`ingredients.${fieldId}.measurement`)}
                    />
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
            {steps.map(({ fieldId, fieldKey }) => (
                <div key={fieldKey}>
                    <label htmlFor={fieldKey}>Description</label>
                    <textarea id={fieldKey} {...register(`steps.${fieldId}`)} />
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
