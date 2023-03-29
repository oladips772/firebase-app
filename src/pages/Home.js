import React from 'react'
import {addDoc,collection,serverTimestamp} from "firebase/firestore"

function Home() {
  return (
    <div className="home">
      <div className="form">
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Info" />
        <button>Add todo</button>
      </div>
      <div className="todos"></div>
    </div>
  );
}

export default Home