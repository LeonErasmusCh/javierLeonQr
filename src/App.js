import * as React from "react";
import { useState } from "react";
import QRCode from "qrcode.react";

//https://www.npmjs.com/package/qrcode.react

function App() {
  const qrRef = React.useRef()

  const [text, setText] = useState("https://google.com")
  const [fgColor, setFgColor] = useState("black")
  const [bgColor, setBgColor] = useState("white")

  const handleDownload = (e) => {
    e.preventDefault()
    // DOWNLOAD 
    let canvas = qrRef.current.querySelector("canvas")
    console.log("canvas", canvas)

    setText("")
  }

  const qrCode = (
    <QRCode
      id="qrCodeId"
      size={500}
      value={text}
      fgColor={fgColor}
      bgColor={bgColor}
      level="L"
    />
  )

  return (
    <div className="container mt-5">
      <div className="row">

        <div className="col-5">
          <form onSubmit={handleDownload}>
            <label htmlFor="exampleInputEmail1" className="form-label">Enter text to convert to qr-code</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="www.hello.io"
              onChange={(e) => { setText(e.target.value) }}
            />
            <label htmlFor="exampleInputEmail1" className="form-label">Enter foreground color</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="black"
              onChange={(e) => { setFgColor(e.target.value) }}
            />
            <label htmlFor="exampleInputEmail1" className="form-label">Enter background color</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="white"
              onChange={(e) => { setBgColor(e.target.value) }}
            />
            <button type="submit" className="btn btn-primary my-3">download qr-code</button>
          </form>
        </div>
        {/* Generate qr code */}
        <div className="col-7 p-3" ref={qrRef}>
          {qrCode}
        </div>

      </div>
    </div>
  );
}

export default App;
