const API = 'https://search.bossjob.com/api/v1/search/job_filter';

export const getJobLists = (size=12, query='system', page=1) => {
    return dispatch => {
        fetch(API+`?size=${size}&query=${query}&page=${page}`)
        .then(response => response.json())
        .then(JobLists => {
            if(JobLists.message === "OK"){
                dispatch({
                    type: "SET_JOBS",
                    jobLists: JobLists.data
                })
            }else{
                throw new Error("Job API Error!")
            }
        })
    }
}

export const setSearchValue = (value) => {
    return dispatch => {
        dispatch({
            type: "SET_SEARCH",
            searchValue: value
        })
    }
}