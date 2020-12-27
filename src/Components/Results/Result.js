import React from 'react'

const Result = ({ result }) => {
    console.log("result comp fired");
    console.log(result.toJS().images.original.url);
    return (
        <>
            Result component
            <img src={result.toJS().images.original.url} alt="" />
        </>
    )
}

export default Result
