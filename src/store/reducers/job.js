const initialState = {
    jobLists : null,
    searchValue : ""
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_JOBS":
            console.log(action.jobLists)
            return updateObject(state,{
                jobLists: action.jobLists,
            });
        case "SET_SEARCH":
            return updateObject(state,{
                searchValue:action.searchValue
            });
        default:
            return state;
    }

};

const updateObject = (sourceObject, updateValues) => {
    return {
        ...sourceObject,
        ...updateValues
    };
};

export default reducer;