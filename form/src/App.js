import formSchema from "./validation/index";

import Form from "./components/Form";
import User from "./components/User";

import { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
      <Form 
        initialState={intitialFormState} 
        setFormValues={setFormValues}
        validity={validity}
        submit={submit}
      />
      {users.map(user => 
        <User user={user} key={user.id}/>
      )}
    </div>
  );
}

export default App;
