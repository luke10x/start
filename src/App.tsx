import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useForm } from "react-hook-form";

export function StepToSelectTemplate() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  console.log(watch("example"));
  
  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input defaultValue="test" {...register("example")} />
      
      <div className="inline-block relative w-64">
        <select {...register("template")} 
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option value="female">CRA with Typescript and docker-compose</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </div>
      </div>

      <input type="submit" />
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
}

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Start new app!
      </h1>
      <StepToSelectTemplate />

    </div>
  );
}

export default App;
