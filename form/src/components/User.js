import React from 'react'

export default function User(props) {
    const { user: { name, email } } = props;
    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
        </div>
    )
}
