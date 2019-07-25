import React from 'react';
import './App.css';
import Comment from './Comment';
import BasicRoute from "./Router";
import Calculator from "./Calculator";
import EssayForm from "./EssayForm";
const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};
function App() {
  return (
    <EssayForm/>
  );
}

export default App;
