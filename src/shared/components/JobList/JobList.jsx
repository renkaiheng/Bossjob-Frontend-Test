import React from 'react'
import './JobList.css';
import Location from '../../../assets/images/location.svg';
import Degrees from '../../../assets/images/graduation-cap.svg';
import Experience from '../../../assets/images/portfolio.svg';
import Time from '../../../assets/images/time.svg';
import './JobList.css'

const JobList = props => {
  return (
  <React.Fragment>
      {
          props.jobsData.jobs.map((job) => {
              return (
                <div className="jobListContainer">
                        <div className="jobHeader">
                            <div className="jobTitle">
                                <span>{job.job_title}</span>
                                <span><br/>Representative -</span>
                            </div>
                            <div className="jobSalaryRange">
                                {SalaryFormatted(job.salary_range_from)} - {SalaryFormatted(job.salary_range_to)}
                            </div>
                        </div>
                        <div className="jobBody">
                            <table>
                                <tr>
                                    <td>
                                        <img src={Location} alt="location" width={13} height={12}/>
                                        <span>{job.company_location}</span>
                                    </td>
                                    <td>
                                        <img src={Experience} alt="location" width={13} height={12}/>
                                        <span>{job.xp_lvl}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={Degrees} alt="location" width={13} height={12}/> 
                                        <span>{job.degree}</span>
                                    </td>
                                    <td>
                                        <img src={Time} alt="location" width={13} height={12}/>
                                        <span>{job.job_type}</span>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="jobFooter">
                            <div className="companyName">
                                <div>
                                    <img src={job.company_logo} alt={job.company_location_key} className="logo"/>
                                </div>
                                <div>{job.company_name}</div>
                            </div>
                            <div className="TimeAgo">
                                {SetTimeAgo(job.created_at)}
                            </div>
                        </div>
                    </div>
              )
          })
      }
  </React.Fragment>
  )
}

const SalaryFormatted = (salary) => {
  let result = Math.abs(salary) > 999 ? Math.sign(salary)*((Math.abs(salary)/1000).toFixed(1)) + 'k' : Math.sign(salary)*Math.abs(salary);
  return "₱" + result;
}

const SetTimeAgo = (timeCreated) => {
  let todayDateTime =  new Date();
  let createdDateTime = new Date(timeCreated);
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;
  let elapsed = todayDateTime - createdDateTime;
  if (elapsed < msPerMinute) {
      return Math.round(elapsed/1000) + ' seconds ago';   
 }
 
 else if (elapsed < msPerHour) {
      return Math.round(elapsed/msPerMinute) + ' minutes ago';   
 }
 
 else if (elapsed < msPerDay ) {
      return Math.round(elapsed/msPerHour ) + ' hours ago';   
 }

 else if (elapsed < msPerMonth) {
      return Math.round(elapsed/msPerDay) + ' days ago';   
 }
 
 else if (elapsed < msPerYear) {
      return Math.round(elapsed/msPerMonth) + ' months ago';   
 }
 
 else {
      return Math.round(elapsed/msPerYear ) + ' years ago';   
 }

}

export default JobList