import React, { useState } from "react";

const Form = (props) => {
    console.log("props", props);
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: "",
    });

    const handleChanges = (e) => {
        console.log(member);
        setMember({
            ...member,
            [e.target.name]: e.target.value,
        });
    };

    const submitForm = (e) => {
        e.preventDefault();
        console.log(member.name);
        console.log(member.email);
        console.log(member.role);
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name</label>
            <input
                id='name'
                type='text'
                name='name'
                onChange={handleChanges}
                value={member.name}
            />
            <label htmlFor='email'>Email</label>
            <input
                id='email'
                name='email'
                onChange={handleChanges}
                value={member.email}
            />
            <label htmlFor='note'>Role</label>
            <input
                id='role'
                name='role'
                onChange={handleChanges}
                value={member.role}
            />
            <button type='submit'>submit</button>
        </form>
    );
};

export default Form;
