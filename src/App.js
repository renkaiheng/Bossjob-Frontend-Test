import React, { Component } from 'react';
import './App.css';
import SearchFilter from './shared/components/SearchFilter';
import JobList from  './shared/components/JobList'
import Header from './shared/components/Header'
import { connect } from 'react-redux';
import {getJobLists, setSearchValue} from './store/actions/job';
import Paginate from './shared/components/Paginate';
const API = 'https://search.bossjob.com/api/v1/search/job_filter?size=10&query=system';
class App extends Component {

  componentDidMount(){
    this.props.getJobLists();
  }

  handleChange = (e) => {
    this.props.setSearchValue(e.target.value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props.searchValue);
    this.props.getJobLists(12, this.props.searchValue ,1)
  }

  handlePageClick = (e) => {
    this.props.getJobLists(12, this.props.searchValue, e.selected+1)
  }


  render() {
    console.log(this.props.jobLists ? this.props.jobLists.jobs : "");
    return (
      <div className="App">
        <div className="App-Wrapper">
          <Header />
          <SearchFilter 
            handleChange = {this.handleChange}
            handleSubmit = {this.handleSubmit}/>
          <div style={{padding: '10px 20px'}}>
          {this.props.jobLists && <div className="totalJobs"> {this.props.jobLists.total_num} jobs found </div>}
          {
            this.props.jobLists && this.props.jobLists.jobs.map((jobs) => {
              return (
                <JobList key={jobs.id} jobDetail = {jobs}/>
              )
            })
          }
          <Paginate totalPage = {this.props.jobLists ? this.props.jobLists.total_pages : 0} handlePageClick = {this.handlePageClick}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    jobLists : state.jobLists,
    searchValue: state.searchValue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getJobLists: (size, query, page) => dispatch(getJobLists(size, query, page)),
    setSearchValue: (value) => dispatch(setSearchValue(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
