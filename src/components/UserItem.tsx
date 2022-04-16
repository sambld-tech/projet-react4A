import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { User } from '../api/types'
import Field from '../private/Field'


const UserItem = (props: User) => {

    return (
        <Link to={`/user/${props.id}`} key={`key-${props.id}`}>
            <div className="user-pérofile-wrapper">
                <Field label="Name">
                    <span>{props.name}</span>
                </Field>
                <Field label="Email">
                    <span>{props.email}</span>
                </Field>
                <Field label="Company">
                    <span>{props.company.name}</span>
                </Field>
                <Field label="Phone">
                    <span>{props.phone}</span>
                </Field>
                <Field label="Address">
                    <span>{props.address.street} - </span>
                    <span>{props.address.city} - </span>
                    <span>{props.address.zipcode}</span>
                </Field>
            </div>
        </Link>
    )
}

export default UserItem
