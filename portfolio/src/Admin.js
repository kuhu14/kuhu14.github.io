import React, { useState } from 'react';
import axios from 'axios';
export default function Admin() {
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [desc, setDesc] = useState()
    const [url, setUrl] = useState ()
    const api = 'http://localhost:8080/'
    const addProduct = async () => {
        await axios.post(api,{name: name, price: price, desc: desc, url: url}) //modify according to node.js file

        }
  return (
    <div>
        <p>
            <input type='text' onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'></input>
        </p>
        <p>
            <input type='text' onChange={(e)=>setPrice(e.target.value)} placeholder='Enter Price'></input>
        </p>
        <p>
            <input type='text' onChange={(e)=>setDesc(e.target.value)} placeholder='Enter Description'></input>
        </p>
        <p>
            <input type='text' onChange={(e)=>setUrl(e.target.value)} placeholder='Enter Image URL'></input>
        </p>
        <button onClick={addProduct}>Save</button>
    </div>
  )
}
