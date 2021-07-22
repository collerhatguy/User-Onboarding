import React, { useState } from 'react';
import formSchema from '../validation';
import * as yup from "yup";

export default function Form(props) {
    const { formValues, setFormValues, validity, submit } = props;
    const change = evt => {
        const {type, value, name, checked } = evt.target;
        const formValue = type === "checkbox" ? checked : value;
        yup.reach(formSchema, name)
            .validate(formValue)
            .then(valid => setError(null))
            .catch(err => setError(err.errors[0]))

        setFormValues(prevValues => {
            return {...prevValues, [name]: formValue}
        })
    }
    const [error, setError] = useState();
    

    return (
        <form onSubmit={submit}>
            <label for="name">
                Name: 
                <input 
                    data-cy="name"
                    onChange={change}
                    value={formValues.name}
                    type="text"
                    name="name"
                    id="name"
                />
            </label>
            <label for="email">
                Email: 
                <input 
                    data-cy="email"
                    onChange={change}
                    value={formValues.email}
                    type="email"
                    name="email"
                    id="email"
                />
            </label>
            <label for="password">
                Password: 
                <input 
                    data-cy="password"
                    onChange={change}
                    value={formValues.password}
                    type="password"
                    name="password"
                    id="password"
                />
            </label>
            <label for="terms">
                Do you agree with the terms of service?: 
                <input 
                    data-cy="terms"
                    onChange={change}
                    checked={formValues.terms}
                    type="checkbox"
                    name="terms"
                    id="terms"
                />
            </label>
            {error ? <p>{error}</p> : null}
            <button 
                data-cy="submit"
                disabled={!validity} 
                type="submit"
            >Submit</button>
        </form>
    )
}
