import React, { useRef } from "react";
import './App.css'

const DEFAULT_MAX = 5000000;

const Upload = ({
  label,
  update,
  maxSize = DEFAULT_MAX,
  ...otherProps
}) => {
  const fileInputField = useRef(null);

  return (
    <div>
      <input type="file" ref={fileInputField} id="btn" hidden/>
      <label for="btn">Upload Custom Button</label>
    </div>
  )
}

export default Upload;