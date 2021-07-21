import formSchema from "./validation/index";

import Form from "./components/Form";
import User from "./components/User";

import { useState, useEffect } from "react";
import axios from "axios";
import "./reset.css"
import "./App.css"

const intitialFormState = {
  name: "", 
  email: "", 
  password: "", 
  terms: false,
}

function App() {
  const url = "https://reqres.in/api/users";
  const [formValues, setFormValues] = useState(intitialFormState);
  const [validity, setValidity] = useState(false);
  const [users, setUsers] = useState([])

  const submit = evt => {
    evt.preventDefault();
    const newObj = {
      name: formValues.name.trim(), 
      email: formValues.email.trim(), 
      password: formValues.password.trim(), 
    }
    axios.post(url, newObj)
      .then(res => {
        console.log(res);
        setUsers([...users, res.data])
      })
      .catch(err => console.log(err))
  } 
  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => setValidity(valid))
  }, [formValues])
  
  return (
    <main>
      <Form 
        initialState={intitialFormState} 
        setFormValues={setFormValues}
        validity={validity}
        submit={submit}
      />
      <div className="user-list">
        {users.map(user => 
          <User user={user} key={user.id}/>
        )}
      </div>
    </main>
  );
}

export default App;
