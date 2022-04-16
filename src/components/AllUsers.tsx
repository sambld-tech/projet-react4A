import { UseScrollTriggerOptions } from '@mui/material/useScrollTrigger/useScrollTrigger'
import React, { useEffect, useState } from 'react'
import { User } from '../api/types'
import { getAllUser } from '../api/user'
import UserItem from './UserItem'



const AllUsers = () => {
    const [users, setAllUsers] = useState<Array<User>>([])
    const [loading, setLoading] = useState(false)

    async function _getAllUsers() {
        const data = await getAllUser()
        setAllUsers(data)
    }

    useEffect( () => {
        _getAllUsers()
    },[])

    function renderItem(values: User) {
        return (
            <div key={values.id}>
                <UserItem {...values} />
            </div>
        )
    }

    if (loading) {
        return (
            <section className="hero">
                <div className="hero-body">
                    <p className="title">Loading ...</p>
                </div>
            </section>
        )
    }

    if (users.length === 0) {
        return (
            <section className="hero">
                <div className="hero-body">
                    <p className="title">No Users</p>
                </div>
            </section>
        )
    }

    return <ul className="post-list">{users.map(renderItem)}</ul>
}

export default AllUsers
