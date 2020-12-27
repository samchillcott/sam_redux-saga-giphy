import React from 'react';
import { connect } from 'react-redux';
import Result from './Result';

const Results = (props) => {
    console.log(props);
    if (props.searchResults){
        return (
            <div>
                Results component
                { renderSearchResults(props.searchResults) }
            </div>
        )
    }
    return null
}

const renderSearchResults = (searchResults) => {
    console.log("renderSearchResults fired");
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
