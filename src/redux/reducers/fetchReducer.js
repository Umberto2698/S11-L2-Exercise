import {
  GET_COMPANY_JOBS,
  GET_COMPANY_JOBS_ERROR,
  GET_COMPANY_JOBS_LOADING,
  GET_JOBS,
  GET_JOBS_ERROR,
  GET_JOBS_LOADING,
} from "../actions";

const initialState = {
  company: {
    content: [],
  },
  searched: {
    content: [],
  },
  error: {
    content: "",
  },
  loading: {
    content: false,
  },
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANY_JOBS:
      return {
        ...state,
        company: {
          content: action.payload,
        },
      };

    case GET_COMPANY_JOBS_ERROR:
      return {
        ...state,
        error: {
          content: action.payload,
        },
      };

    case GET_COMPANY_JOBS_LOADING:
      return {
        ...state,
        loading: {
          content: action.payload,
        },
      };

    case GET_JOBS:
      return {
        ...state,
        searched: {
          content: action.payload,
        },
      };

    case GET_JOBS_ERROR:
      return {
        ...state,
        error: {
          content: action.payload,
        },
      };

    case GET_JOBS_LOADING:
      return {
        ...state,
        loading: {
          content: action.payload,
        },
      };

    default:
      return state;
  }
};

export default fetchReducer;
