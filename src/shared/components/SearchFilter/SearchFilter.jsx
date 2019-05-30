import React from 'react';
import './SearchFilter.css';
import Search from '../../../assets/images/search.svg';
 const SearchFilter = props => (
    <React.Fragment>
        <form onSubmit={props.handleSubmit}>
            <div className="SearchFilterContainer">
                <div className="searchBar">
                    <img src={Search} alt="search" className="searchLogo"/>
                    <input type="text" placeholder="Search for job title or company name" onChange={props.handleChange}/>
                </div>
                <div className="buttonBar">
                    <button className="filterButton" type="submit" onClick={props.handleSubmit}>Filter results</button>
                </div>
            </div>
        </form>
        
    </React.Fragment>
)

export default SearchFilter;