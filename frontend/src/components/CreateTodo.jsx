import { useState } from "react";
export function CreateTodo() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
        <input style={{padding: 5,
          margin: 5
        }}type='text' placeholder='title' onChange={function(e){
          const value= e.target.value;
          setTitle(value);
        }}></input><br /><br />

        <input style={{padding: 5,
          margin: 5
        }} type='text' placeholder='description' onChange={function(e){
          const value= e.target.value;
          setDescription(value);
        }}></input><br /><br />

        <button style={{padding: 5,
          margin: 5
        }} onClick={()=>{
            fetch("http://localhost:3000/todo", {
              method: "POST",
              body: JSON.stringify({
                  title: title,
                  description: description
              }),
              headers: {
                "ContentType": "application/json"
              }
            })
              .then(async function(res){
                const json= await res.json();
                alert("Todo Added");
              })
        }}>Add Todo</button>
    </div>
  )
}
