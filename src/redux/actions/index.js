export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_TO_FAVOURITE = "REMOVE_TO_FAVOURITE";
export const GET_JOBS = "GET_JOBS";
export const GET_COMPANY_JOBS = "GET_COMPANY_JOBS";

export const addToFavouriteAction = (data) => ({ type: ADD_TO_FAVOURITE, payload: data });
export const removeToFavouriteAction = (id) => ({ type: REMOVE_TO_FAVOURITE, payload: id });

const companyEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";
export const getCompanyJobsAction = (company_name) => {
  return async (dispatch) => {
    try {
      const response = await fetch(companyEndpoint + company_name);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: GET_COMPANY_JOBS, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
export const getJobsAction = (input) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + input + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: GET_JOBS, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
