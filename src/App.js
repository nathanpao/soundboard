import './App.css';
import sound from './temp.m4a';
import img from './IMG_2361.jpeg';
import tempSound from './ellen.m4a';
import ellen from './IMG_3564.jpeg';
import Button from './Button.js';
import Upload from './Upload';
import Title from './Title';
import Login from './Login';
import alexdead from './alexdead.JPG';
import alexdeadsound from './alex drad.m4a';
import alexhey from './alexhey.jpeg';
import alexheysound from './alwx hey.m4a';
import wanhao from './wannhao.jpeg';
import wanhaosound from './wanbao heh.m4a';
import joban from './jjoban.jpeg';
import jobansound from './joban.m4a';
//import express from 'express';
//import mongoose from 'mongoose';

function App() {

  /*
  const app = express();
  const CONNECTION_URL = 'mongodb+srv://dunnzomccree:HFACy5oB8QiQEXpw@speak.srs8jz6.mongodb.net/?retryWrites=true&w=majority';
  const PORT = process.env.port || 5000;

  mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopolgy: true})
    .then(() => app.listen(PORT, () => console.log(`Serving running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))
  */

  return (
    <div class="app">
      <body id="top">
        <body />
        <Title />
        <Login />
      </body>
      <body class="grid" >
        <Button class="button" imgSrc={img} soundSrc={sound} text={"Ronald"}/>
        <Button imgSrc={ellen} soundSrc={tempSound} text={"Ellen"}/>
        <Button imgSrc={alexdead} soundSrc={alexdeadsound} text={"Alex"}/>
        <Button imgSrc={joban} soundSrc={jobansound} text={"Joban"}/>
        <Button imgSrc={wanhao} soundSrc={wanhaosound} text={"Wanhao"}/>
        <Button imgSrc={alexhey} soundSrc={alexheysound} text={"hey... 😉"}/>
      </body>
      <body class="center">
        <Upload />
      </body>
    </div>
  );
}

export default App;
