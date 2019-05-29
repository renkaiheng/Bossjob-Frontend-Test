import React, { Component } from 'react';
import './App.css';
import SearchFilter from './components/SearchFilter/SearchFilter';
import JobList from './components/JobList/JobList';
import Header from './shared/components/Header'
const API = 'https://search.bossjob.com/api/v1/search/job_filter?size=10&query=system';
class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      jobLists : null
    }
  }

  componentDidMount(){
    fetch(API)
    .then(response => response.json())
    .then(jobLists => this.setState({jobLists : jobLists.data}))
  }
  render() {
    console.log(this.state.jobLists);
    return (
      <div className="App">
        <div className="App-Wrapper">
          <Header />
          <div style={{padding: '10px 20px'}}>
          <SearchFilter />

          {this.state.jobLists && <div className="totalJobs"> {this.state.jobLists.size} jobs found </div>}
          {this.state.jobLists &&
            this.state.jobLists.jobs.map((jobs) => {
              return (
                <JobList key={jobs.id} jobDetail = {jobs}/>
              )
            })
          }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
