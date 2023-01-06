let username = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).user
  : "";
let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).token
  : "";
 
export const initialState = {
  userDetails: "" || username,
  token: "" || token,
  loading: false,
  errorMessage: null
};
 
export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true
      };
    case "REQUEST_SIGNUP":
      return {
        ...initialState,
        loading: true
      };
    case "SIGNUP_SUCCESS":
      return {
        ...initialState,
        loading: false,
        username: action.payload.username,
        token: action.payload._id,
        errorMessage: null
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        username: action.payload.username,
        token: action.payload._id,
        loading: false,
        errorMessage: null
      };
    case "LOGOUT":
      return {
        ...initialState,
        username: "",
        token: ""
      };
    case "SIGNUP_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.payload
      };
    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error
      };
 
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};