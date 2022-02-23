
import React, {  useContext } from "react";
import "./App.css";
import { Form, Field } from 'react-final-form';
import {
  SecurityContextProvider,
  SecurityContext,
  STATUS_LOADING
} from "./contexts/SecurityContext";

const AppRender = () => {
  const [{ repeats }, { validateText,required }] = useContext(SecurityContext)

  return (
    <div className="container">

      <Form
        onSubmit={validateText}

        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h2>Ingrese un texto</h2>
            <label>Se buscaran las palabras repetidas</label>
            <Field
            validate={required}
              name="text_validate"
              render={({ input, meta }) => (
                <div>
                  <textarea className="form-control" {...input} />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            />
            <br></br> <button className="btn btn-primary" type="submit">Validar</button>
          </form>
        )}
      />

      {repeats.status===STATUS_LOADING&&"Buscando coincidencias"}
      {repeats.repeats.map((r,i) => {
        return (<div key={i}>

         <strong>{r[0]}</strong>  se repite <strong>{r[1]}</strong> veces
        </div>)
      })}
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
