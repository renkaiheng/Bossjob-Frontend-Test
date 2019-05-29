import React, { Component } from 'react';
import './JobList.css';
import Location from '../../assets/images/location.svg';
import Degrees from '../../assets/images/graduation-cap.svg';
import Experience from '../../assets/images/portfolio.svg';
import Time from '../../assets/images/time.svg';
const JobList = ({jobDetail}) => {
    return (
    <React.Fragment>
        <div className="jobListContainer">
            <div className="jobHeader">
                <div className="jobTitle">
                    <span>{jobDetail.job_title}</span>
                    <span><br/>Representative -</span>
                </div>
                <div className="jobSalaryRange">
                    {SalaryFormatted(jobDetail.salary_range_from)} - {SalaryFormatted(jobDetail.salary_range_to)}
                </div>
            </div>
            <div className="jobBody">
                <table>
                    <tr>
                        <td>
                            <img src={Location} alt="location" width={13} height={12}/>
                            <span>{jobDetail.company_location}</span>
                        </td>
                        <td>
                            <img src={Experience} alt="location" width={13} height={12}/>
                            <span>{jobDetail.xp_lvl}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={Degrees} alt="location" width={13} height={12}/> 
                            <span>{jobDetail.degree}</span>
                        </td>
                        <td>
                            <img src={Time} alt="location" width={13} height={12}/>
                            <span>{jobDetail.job_type}</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="jobFooter">
                <div className="companyName">
                    <img src={jobDetail.company_logo} alt={jobDetail.company_location_key} className="logo"/>
                    <span>{jobDetail.company_name}</span>
                </div>
                <div className="TimeAgo">
                    {SetTimeAgo(jobDetail.created_at)}
                </div>
            </div>
        </div>
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

export default JobList;