import React from 'react'

const Result = ({ result }) => {
    console.log(result.toJS().images.original.url);
    return (
        <>
            <img src={result.toJS().images.original.url} alt="" />
        </>
    )
}

export default Result
