import { useState } from 'react';
import PropTypes from 'prop-types';
import React from 'react';


const INITIAL_FORM_DATA = {
    title: '',
    description: '',
    isComplete: false
}

const TaskForm = ({ addTask }) => {
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);

    const handleChange = (event) => {
        const newFormData = {
            ...formData,
            [event.target.name]: event.target.value,
        };
        setFormData(newFormData);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addTask(formData);
        console.log(formData)
        setFormData(INITIAL_FORM_DATA);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input
                required
                type='title'
                id='title'
                name='title'
                value={formData.title}
                onChange={handleChange}
            />
            <label htmlFor="description">Description</label>
            <input
                type='text'
                id='description'
                name='description'
                value={formData.description}
                onChange={handleChange}
            />
            <input type="submit" value="submit" />
        </form>
    );
};

TaskForm.propTypes = {
    addTask: PropTypes.func.isRequired,
};

export default TaskForm;