import React from 'react'
import netlifyIdentity from 'netlify-identity-widget'

const Index = () => {
    React.useEffect(() => {
        netlifyIdentity.init({})
    }, [])
    return (
        <div>
            <h1>Todo App</h1>
            <button onClick={() => netlifyIdentity.open()}>Login</button>
        </div>
    )
}

export default Index
