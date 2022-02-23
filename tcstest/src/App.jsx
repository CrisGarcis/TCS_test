
import React, { useEffect, useContext } from "react";
import "./App.css";
import { Form, Field } from 'react-final-form';
import {
  SecurityContextProvider,
  SecurityContext
} from "./contexts/SecurityContext";

const AppRender = ({ match }) => {
  const [{ }, {validateText }] = useContext(SecurityContext)

  return (
    <div className="flex">

   <Form
    onSubmit={validateText}
  
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <h2>Simple Default Input</h2>
       
       
        <Field
          name="bio"
          render={({ input, meta }) => (
            <div>
              <label>Bio</label>
              <textarea {...input} />
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        />


        <button type="submit">Submit</button>
      </form>
    )}
  />
    </div>
  );



};

const App = () => {
  return (


    <SecurityContextProvider>
      <AppRender />
    </SecurityContextProvider>

  );
};

export default App;
