import { csrfFetch } from './csrf';

const CREATE_NOTEBOOK = 'post/CREATE_NOTEBOOK'
const GET_NOTEBOOKS= 'post/GET_NOTEBOOKS'

const newNotebook = (notebook) => {
    return {
    type: CREATE_NOTEBOOK,
     payload: notebook
    }
}

const getNotebooks = (notebooks) => {
    return {
        type: GET_NOTEBOOKS,
        payload: notebooks
    }
}

export const createNotebook = (notebook) => async (dispatch) => {

    const response = await csrfFetch(`/api/notebooks`, {
        method: 'POST',
        body: JSON.stringify(notebook)
    })

    const data = await response.json()

    dispatch(newNotebook(data.notebook));

    return data;
}

export const getAllNotebooks = () => async (dispatch) => {

    const response = await csrfFetch('/api/notebooks')
    const data = await response.json()
    dispatch(getNotebooks(data.notebooks))
    return response
}

function notebookReducer(state={}, action) {
    let newState;
    switch(action.type){
        case CREATE_NOTEBOOK:
            newState= Object.assign({}, state, {[action.payload.id]: action.payload})
            return newState;
        case GET_NOTEBOOKS:
            newState= Object.assign({}, action.payload)
            return newState;
        default:
            return state;
    }
}

export default notebookReducer
