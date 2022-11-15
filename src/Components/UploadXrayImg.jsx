import React from 'react';
import { useState } from 'react';
import axios from "axios";
import ScoliosisMeasuredResult from './ScoliosisMeasuredResult';

const MeasureScoliosis = () => {
  //const image = null;
  const [selectedImage, setSelectedImage] = useState(sessionStorage.getItem("uploadedImg"));
  const [angle, setAngle] = useState("");
  const inputRef = React.useRef();

  //set upload image file
  const handlePhoto = (e) => {
    // setSelectedImage({ image: e.target.value });
    setSelectedImage(e.target.files[0]);
  };

  const onImageChange = (event) => {
    console.log("file obj = " + (event.target.files[0].size/1024/1024).toFixed(4));
    var inputFile = event.target.files[0];
    var filesize = (inputFile.size / 1024 / 1024).toFixed(4); // MB

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onloadend = () => {
        console.log("file reader = " + reader.result);
        if (typeof inputFile.name != "undefined" && filesize <= 4.000) { //check file size 

          setSelectedImage(URL.createObjectURL(event.target.files[0]));// set file
          sessionStorage.setItem("uploadedImg", reader.result);//add file into session storage
        } else {
          alert("File size cannot be greater than 4mb");
        }
        
      };

      reader.readAsDataURL(inputFile);
    } else {
      document.getElementsByName("selectedImage").values();
    }

  };



  function measureAngle() {
    console.log("measure method started");

    if (selectedImage != null) {
      // axios.post("http://127.0.0.1:5000/", selectedImage)
      //   .then(res => {
      // setAngle(res.cobb_angle);
      //     console.log("post response: " + res );
      //   })
      //   .catch((error) => {
      //     console.log(error.error);
      //     alert(error.error);
      //   });


    window.location = "/severity";
    } else {
      alert("Please enter a scoliosis X-Ray image");
    }

    
    // return (<ScoliosisMeasuredResult angle={angle} />);
  }

  return (
    <div className="container">
      <h1>To Check Your Scoliosis severity upload your X-Ray image</h1>

      <div class="row">
        <div class="col-lg-12">
          <div class="card card-custom gutter-b">

            <form id="xrayUploadForm">
              <div class="card-body">
                <div className="mb-3">
                  {/* view uploaded image */}
                  <img
                    src={selectedImage} name="selectedImage" id="selectedImage"
                    accept=".jpg,.png,.jpeg"
                    onChange={handlePhoto}
                    style={{
                      width: "200px", height: "400px", padding: "50px 0",
                    }}
                    alt="Upload your X-Ray image"
                    ref={inputRef}
                  />
                  <br />

                  <label for="image" className="form-label">
                    X-Ray Image:
                  </label>

                  <input
                    className="form-control"
                    type="file"
                    id="image"
                    accept=".jpg,.png,.jpeg"
                    name="image"
                    onChange={onImageChange}
                    
                  />
                </div>
                <div className="form-group row">
                  <div className="col-lg-4"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <br />
      <button type="button" className="btn btn-success" onClick={measureAngle}>
          CHECK
      </button>
    </div>
  );
}
//href="/severity"
export default MeasureScoliosis;