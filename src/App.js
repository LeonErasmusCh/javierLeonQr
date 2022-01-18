import * as React from "react";
import { useState } from "react";
import QRCode from "qrcode.react";

//https://www.npmjs.com/package/qrcode.react

function App() {
  const qrRef = React.useRef()

  const [text, setText] = useState("")
  const [fgColor, setFgColor] = useState("black")
  const [bgColor, setBgColor] = useState("white")

  const handleDownload = (e) => {
    e.preventDefault()

    // DOWNLOAD 
    let canvas = qrRef.current.querySelector("canvas") //grabbing image
    //console.log("canvas", canvas)
    let image = canvas.toDataURL("image/png"); // converting image to png
    let anchor = document.createElement("a") // creating an a tag 
    anchor.href = image // setting the link and passing the image
    anchor.download = "qr_code.png" // downmload anchor tag & naming it "qr_code.png" , could be a dynamic name
    document.body.appendChild(anchor)
    anchor.click();
    document.body.removeChild(anchor)


  }

  const qrCode = (
    <QRCode
      id="qrCodeId"
      size={400}
      value={text}
      fgColor={fgColor}
      bgColor={bgColor}
      level="L"

    />
  )

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-around">

        <div className="col-10 col-md-5 mb-4">
          <form onSubmit={handleDownload}>
            <label htmlFor="exampleInputEmail1" className="form-label">Enter text to convert to qr-code</label>
            <input
              type="text"
              className="form-control" esw
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="www.hello.io"
              onChange={(e) => { setText(e.target.value) }}
              required
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
          </form>
        </div>


        {/* Generate qr code */}
        <div className=" col-10 col-md-6" ref={qrRef}>
          {qrCode}
        </div>

      </div>

      <div className="container" >
        <div className="row d-flex justify-content-center" >
        <div className="col-2" >
          <button type="submit" className="btn btn-primary my-5 button">download qr-code</button>
        </div>
        </div>
      </div>

    </div>
  );
}

export default App;
