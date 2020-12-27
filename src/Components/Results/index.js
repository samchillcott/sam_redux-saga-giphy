import React from 'react';
import { connect } from 'react-redux';
import Result from './Result';

const Results = (props) => {
    console.log(props);
    if (props.searchResults){
        return (
            <div>
                { renderSearchResults(props.searchResults) }
            </div>
        )
    }
    return null
}

const renderSearchResults = (searchResults) => {
    return searchResults.map(result => {
        return <Result result={result} />
    })
}


const mapStateToProps = (state) => {
    return {
        searchResults: state.search.get('searchResults')
    }
};

export default connect(mapStateToProps)(Results)
