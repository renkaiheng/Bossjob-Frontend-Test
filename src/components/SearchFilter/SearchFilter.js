import React, { Component } from 'react';
import './SearchFilter.css';
import Search from '../../assets/images/search.svg';
 const SearchFilter = () => (
    <React.Fragment>
        <div className="SearchFilterContainer">
            <div className="searchBar">
                <img src={Search} alt="search" className="searchLogo"/>
                <input type="text" placeholder="Search for job title or company name"/>
            </div>
            <div className="buttonBar">
                <button className="filterButton">Filter results</button>
            </div>
        </div>
    </React.Fragment>
)

export default SearchFilter;