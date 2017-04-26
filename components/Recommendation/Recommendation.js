import React, { PropTypes } from 'react';
import Autosuggest from 'react-autosuggest';

const Recommendation = ({classSuggestions, name, recommendations, recommendationFetched,
	onSuggestionsClearRequested, getSuggestionValue, fetchClassSuggestions,
	onSuggestionSelected, onChangeClassId, onSuggestionsFetchRequested}) => (
		<div>
		<p>Search Course:</p>
		<Autosuggest
			suggestions={classSuggestions}
			onSuggestionsFetchRequested={onSuggestionsFetchRequested}
			onSuggestionsClearRequested={onSuggestionsClearRequested}
			getSuggestionValue={getSuggestionValue}
			renderSuggestion={(suggestion) =>  <div>{suggestion.catalog_number}</div>}
			inputProps={{placeholder:'Enter Course Id', value:name, onChange:(event, { newValue }) => onChangeClassId(newValue)}}
			onSuggestionSelected={onSuggestionSelected}
	    />
	    {recommendationFetched ? 
	    	<div>
		    	<h1 className="subtitle">{recommendations.course.title}</h1>
		    	<p>Expected Grade: {recommendations.grade}</p>
		    	<p>Expected Workload: {recommendations.hours} hours</p>
		    	{recommendations.associated_tags.map((tag) => 
		    		<span className="tag is-medium">{tag.name}</span>)}
	    	</div>
	    : null}
	    </div>
)

export default Recommendation