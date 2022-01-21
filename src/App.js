import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function App() {
  const [user, setUser]=useState("")
  async function getData() {
    let data = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(data.data)
    setUser(data.data)
  }
  useEffect(()=>{
    getData()
  },[])
  if(user!==""){
    return (
      <div className="App">
        { user.map(e=>(
          <div className="WrapCard" key={e.id}> 
            <div className="Card">
          <div className="Wrapprofile">
            <div className="profile">
              <p>Ini photo profile</p>
            </div>
          </div>
          <div className="Text">
            <p>Nama: {e.name}</p>
            <p>Username: {e.username} </p>
            <p>Email: {e.email}</p>
            <p>Alamat: {e.address.street}</p>
            <p>No. Telp: {e.phone}</p>
          </div>
          </div>
          <div className="Link">
            <Link to={`/post/${e.id}`}>Post</Link>
          </div>
        </div>
        )) }
      </div>
    );
  }
  else{
    return false
  }
}

export default App;
