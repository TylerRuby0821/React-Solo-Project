import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Notebook.css'
import {getAllNotebooks} from '../../store/notebook'
import Sidebar from '../Sidebar'
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function Notebook() {
  const dispatch = useDispatch()

      useEffect(()=> {
        dispatch(getAllNotebooks())
      }, [dispatch])

      const notebooks = useSelector((store) => Object.values(store.notebook))

      return (
        <div>
          <Sidebar />
          <div className='notebooks'>
            <h2>Notebooks</h2>
            <button className='create__notebook--button'> <NavLink to='/notebook/create'>Create Notebook</NavLink></button>
            <p>---------------------------------------------------</p>
              {notebooks.map(notebook => {
               return <div key={notebook.id} className='books__container'>
                  <p key={notebook.id}>{notebook.id}: {notebook.name}</p>


                </div>
            })}

        </div>
       </div>
    )
}

export default Notebook;
