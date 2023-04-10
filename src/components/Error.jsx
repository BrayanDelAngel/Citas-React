import React from 'react'

const Error = ({children}) => {
    return (
        <div className="bg-red-600 text-white rounded-lg text-center text-lg font-bold p-2">
            <p>{children}</p>
        </div>
    )
}

export default Error