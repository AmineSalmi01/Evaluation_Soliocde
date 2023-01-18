import { useHookstate } from '@hookstate/core'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { studentState } from '../store/store'

const Search = () => {

    const student = useHookstate(studentState);

    const [input, setInput] = useState("");

    const handleInput = (e) => {
        setInput(e.target.value);
    }
    
    useEffect(()=> {
        if(input)
        {
                axios.get(`http://127.0.0.1:8000/api/searchStudent/${input}`).then((res) => {
                student.set(res.data);
            })
        }
        else {
            student.set([]);
        }
    }, [input])
  return (
    <div>
        <input type="text" onChange={handleInput} value={input}/>
        <p>{student.get()}</p>
        

    </div>
  )
}

export default Search