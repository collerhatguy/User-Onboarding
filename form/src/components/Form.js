import React from 'react'

export default function Form() {
    return (
        <div>
            <label for="name">
                Name: 
                <input 
                    type="text"
                    name="name"
                    id="name"
                />
            </label>
            <label for="email">
                Email: 
                <input 
                    type="email"
                    name="email"
                    id="email"
                />
            </label>
            <label for="password">
                Password: 
                <input 
                    type="password"
                    name="password"
                    id="password"
                />
            </label>
            <label for="terms">
                Do you agree with the terms of service?: 
                <input 
                    type="checkbox"
                    name="terms"
                    id="terms"
                />
            </label>
            <button type="submit" >Submit</button>
        </div>
    )
}
