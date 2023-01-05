import axios from 'axios';

const URL = "http://localhost:3001"

export async function loginUser(dispatch, loginPayload) {
    try {
        dispatch({ type: 'REQUEST_LOGIN' });
        const response = await axios.post(URL + '/login', loginPayload);
        const data = response.data;
        console.log(data)

        if (data.username) { // valid login
            dispatch({ type: 'LOGIN_SUCCESS', payload: data});
            localStorage.setItem('currentUser', JSON.stringify(data));
            return data;
        }
        dispatch({ type: 'LOGIN_ERROR', error: data.error});
        return;
    }
    catch (error) {
        dispatch({ type: 'LOGIN_ERROR', error: error })
    }
}

export async function logout(dispatch) {
    dispatch({ 'type' : 'LOGOUT'});
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
}