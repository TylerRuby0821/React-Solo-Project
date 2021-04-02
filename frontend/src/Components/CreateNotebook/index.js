import React, { useState } from "react";
import "./CreateNotebook.css"
import {createNotebook} from '../../store/notebook'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function CreateNotebook () {
    const history = useHistory()
    const dispatch = useDispatch()
    const [name, setName] = useState('My First Notebook')
    const sessionUser = useSelector(state => state.session.user)

    const handleSubmit = (e) => {
        e.preventDefault();
        const userId = sessionUser.id
        const notebook = {
            userId,
            name
        }
        console.log(notebook)
        dispatch(createNotebook(notebook))
        history.push('/notebooks')
      };


    return (
        <div>
            <h2>Create Notebook</h2>
            <p> Please give your new notebook a title!</p>
            <input placeholder='Title' onChange={(e) => setName(e.target.value)}></input>
            <button type='submit' onClick={handleSubmit}>Create</button>
        </div>
    )
}


export default CreateNotebook;
