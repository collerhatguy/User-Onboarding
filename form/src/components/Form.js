import React, { useState } from 'react';
import formSchema from '../validation';
import * as yup from "yup";
import styled from 'styled-components';

export default function Form(props) {
    const { initialState, setFormValues, validity, submit } = props;
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

    const StyledForm = styled.form`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `

    return (
        <form onSubmit={submit}>
            <label for="name">
                Name: 
                <input 
                    onChange={change}
                    type="text"
                    name="name"
                    id="name"
                />
            </label>
            <label for="email">
                Email: 
                <input 
                    onChange={change}
                    type="email"
                    name="email"
                    id="email"
                />
            </label>
            <label for="password">
                Password: 
                <input 
                    onChange={change}
                    type="password"
                    name="password"
                    id="password"
                />
            </label>
            <label for="terms">
                Do you agree with the terms of service?: 
                <input 
                    onChange={change}
                    type="checkbox"
                    name="terms"
                    id="terms"
                />
            </label>
            {error ? <p>{error}</p> : null}
            <button disabled={!validity} type="submit" >Submit</button>
        </form>
    )
}
