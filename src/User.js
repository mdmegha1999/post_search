import React, { useState} from "react";
import List from "./List";

export default function Posts() {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");


  function getData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
          let users = [...data]
          if(user==""){
        setUser(users)}
        console.log(user)

      });
  }

  getData()
  return (
    <div>
        
        <div className="search">
            <input placeholder="Search user..." onChange={(e)=>{setSearch((e.target.value))}}/>
          
        </div>
    <div className="card-ul">
       {user.filter((item,i)=>item.title.includes(search)).map((item, i) => 
        <List   key={item.id} title={item.title} body={item.body} />
      
      )}
     
      
    
      </div>
    </div>
  );
}
