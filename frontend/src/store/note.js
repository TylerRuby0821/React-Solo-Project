import { csrfFetch } from './csrf';

const CREATE_NOTE = 'post/CREATE_NOTE'
const GET_NOTES= 'post/GET_NOTES'

const newNote = (note) => {
    return {
    type: CREATE_NOTE,
     payload: note
    }
}

const getNotes = (notes) => {
    return {
        type: GET_NOTES,
        payload: notes
    }
}

export const createNote = (note) => async (dispatch) => {

    const response = await csrfFetch(`api/notes/`, {
        method: 'POST',
        body: JSON.stringify(note)
    })

    const data = await response.json()

    dispatch(newNote(data.note));

    return data;
}

export const getAllNotes = () => async (dispatch) => {

    const response = await csrfFetch('/api/notes')
    const data = await response.json()
    dispatch(getNotes(data.notes))
    return response
}

function noteReducer(state={}, action) {
    let newState;
    switch(action.type){
        case CREATE_NOTE:
            newState= Object.assign({}, state, {[action.payload.id]: action.payload})
            return newState;
        case GET_NOTES:
            newState= Object.assign({}, action.payload)
            return newState;
        default:
            return state;
    }
}

export default noteReducer
