import React, { useMemo, useState, useCallback } from "react"

export default {
    title: 'useMemo'
}

export const Example1 = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {

        let tempResultA = 1

        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA *= i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))} />
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))} />
        <hr />
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>
    </>
}

const UsersSecret = (props: { users: string[] }) => {
    console.log('USERS SECRET')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Petr', 'Alex', 'Sveta'])

    const newArr = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    return <>
        <button onClick={() => setCounter(counter + 1)}>inc</button>
        {counter}
        <Users users={newArr} />
    </>
}


export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])


    const memoizedAddBook = useCallback(() => {
        return () => {
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])



    return <>
        <button onClick={() => setCounter(counter + 1)}>inc</button>
        {counter}
        <Books addBook={memoizedAddBook} />
    </>
}

type BookSecretType = {

    addBook: () => void
}

const BooksSecret = (props: BookSecretType) => {
    console.log('BOOKS SECRET')
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}

const Books = React.memo(BooksSecret)