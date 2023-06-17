import React from 'react';
import { FIELD_TYPES } from '../../constants';

export const AddRecipeForm = () => {
    const FORM_FIELDS = [
        { fieldId: 'name', label: 'Name', type: FIELD_TYPES.text },
        {
            fieldId: 'ingredients',
            label: 'Ingredients',
            type: FIELD_TYPES.textarea,
        },
        { fieldId: 'steps', label: 'Steps', type: FIELD_TYPES.textarea },
    ];

    return (
        <form>
            {FORM_FIELDS.map(({ fieldId, label, type }) => (
                <div key={fieldId}>
                    <label htmlFor={fieldId}>{label}</label>
                    {type === FIELD_TYPES.textarea ? (
                        <textarea id={fieldId} />
                    ) : (
                        <input id={fieldId} type="text" />
                    )}
                </div>
            ))}
            <input type="submit" />
        </form>
    );
};
