import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";

const Create = (props) => {
  const todos = props.todos;
  const setTodos = props.setTodos;

  const [title, settitle] = useState("");
  // const[Completed, setcompleted] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault(); //page refresh hone se bachaya

    const newtodo = {
      id: nanoid(),
      title: title,
      isCompleted: false,
    };

    //1.option
    let copytodos = [...todos]; //array ko copy kiya
    copytodos.push(newtodo); //array mein add kiya
    setTodos(copytodos); //abb pure array ko wapas se addd kar diya

    //2.option
    // setTodos([...todos,newtodo])

    settitle("");
  };

  return (
    <div className="border w-[70%] p-10 text-center">
      <h1 className="mb-10  text-4xl text-thin ">
        Set <span className="text-red-300">Reminder</span> For Task
      </h1>
      <br />
      <form onSubmit={SubmitHandler}>
        <input
          onChange={(e) => settitle(e.target.value)} //jisme valude on usmee.target.value
          value={title}
          className="border-b w-full text-2xl font-thin p-2 outline-0 "
          type="text"
          placeholder="title"
        />
        <br />
        {/* <input 
                    onChange={(e)=>setcompleted(e.target.checked)} 
                    value={Completed}
                    type="checkbox"  />Completed */}
        <br />
        {/* <input 
                                                            value="male"
                                                            onChange={(e)=>setgender(e.target.value)}
                                                            checked ={gender == "male" }
                                                            type="radio" 
                                                            />
                                                            male
                                                            
                                                            <input 
                                                            value="female"
                                                            onChange={(e)=>setgender(e.target.value)}
                                                            checked ={gender == "female" }
                                                            type="radio" 
                                                            />
                                                            female */}
        <br />
        {/* <select 
                                                            onChange={(e) => setcity(e.target.value)}
                                                            value={city}
                                                            className='bg-white border-5rem text-black border-5rem'>
                                                            <option value="Delhi">Delhi</option>
                                                            <option value="Mumbai">Mumbai</option>
                                                            <option value="Surat">Surat</option>
                                                            </select> */}

        <button className="text-xl px-10 py-2 border rounded">
          Create todos
        </button>
        <br />
        <br />
      </form>
    </div>
  );
};

export default Create;
