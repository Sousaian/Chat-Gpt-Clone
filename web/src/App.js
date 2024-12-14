import { useState } from 'react';

import './styles/App.css';
import "./styles/reset.css";

import { makeRequest } from './api/api';

import {SideMenu} from './components/SideMenu/SideMenu.js';
import {ChatMessages} from './components/ChatMessages/ChatMessages.js';

function App() {

    const[input, setInput] = useState("");
    const[chatlog, setChatlog] = useState([{
      user: "gpt",
      message: "Olá, como posso te ajudar?"
    }]);

    async function handleSubmit(e){
      e.preventDefault();
      let response = await makeRequest({prompt: input});

      response = response.data.split("\n")
      .map(line => <p>{line}</p>);

      setChatlog([...chatlog, {
       user: "me",
       message: `${input}` 
      },
      {
        user: "gpt",
        message: response
      }
      ])

      setInput("");
    }


  return (
    <div className="App">
      <SideMenu></SideMenu>

      <section className='chatBox'>
        <div className="chatlog">
          {chatlog.map((message, index)=> (<ChatMessages key={index} message={message}/>))}

        </div>
        <div className='chat-input-holder'>
          <form onSubmit={handleSubmit}>
            <input rows='1'
            className='chat-input-texarea'
            value={input}
            onChange={(e) => setInput(e.target.value)}>
            </input>

          </form>
        </div>

      </section>
    </div>
  );
}

export default App;
