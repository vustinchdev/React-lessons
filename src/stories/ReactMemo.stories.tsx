import React, { useState } from "react"

export default {
    title: 'React.memo demo '
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: string[] }) => {
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    console.log('Example 1')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Petr', 'Alex', 'Sveta'])

    const addUser = () => {
        const newUser = [...users, 'Katya' + new Date().getTime()]
        setUsers(newUser)
    }

    users.push('Katya' + new Date().getTime())

    return <>
        <button onClick={() => setCounter(counter + 1)}>inc</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter} />
        <Users users={users} />
    </>
}