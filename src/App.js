import { useState } from 'react';
import './App.css';
import { db, app } from './firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function App() {
  const handleClick = () => {

const auth = getAuth(app);
createUserWithEmailAndPassword(auth, 'favas@gmail.com', '123456')
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    getDocs(collection(db, 'products'))
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
        });
      })
    //   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  };

  return (
    <div className='App'>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
