import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const Post = () => {
  const param=useParams()
  const [oke, setOke]=useState("")
  async function postData(){
      let currentId=param.id
      let data = await axios.get("https://jsonplaceholder.typicode.com/posts")
        let isiData = data.data
        let fill = isiData.filter(e => e.userId == currentId)
        setOke(fill)
  }
  useEffect(()=>{
      postData()
  },[])
  console.log(oke);
  if (oke !== ""){
    return (
        <div>
             {oke.map(e => (
            <>
            <p>userId: {e.userId}</p>
            <p>title: {e.title}</p>
            <p>body: {e.body}</p> 
            <p>id: {e.id}</p>
            <hr/>
            </>
        ))}
        </div>
    );
  }
  else {return false}
    
};

export default Post;
