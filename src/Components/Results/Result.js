import React from 'react';
import { Spring } from 'react-spring/renderprops'

const Result = ({ result }) => {
    return (
        <>
            <Spring
                from={{ opacity: 0}}
                to={{opacity: 1}}>
                {springProps => <div style={ springProps }>
                    <img src={result.toJS().images.original.url} alt="" />
                </div>}
            </Spring>
        </>
    )
}

export default Result
