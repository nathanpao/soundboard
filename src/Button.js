import './App.css';

export default function Button( {imgSrc, soundSrc, text} ) {

  let audio = new Audio(soundSrc);

  return (
    <button class="button" onClick={() => audio.play()}>
      <img class="image" src={imgSrc} alt="logo"/>
      <p>{text}</p>
    </button>
  )
}
