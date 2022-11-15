import { useState, useEffect } from "react";
import '../Styles/measureResult.css';
import axios from "axios";
import jsPDF from 'jspdf';

const ScoliosisMeasuredResult = ({angle}) => {

    const [uploadImg, setUploadImg] = useState(null);
    const [cobbAngle, setCobbAngle] = useState(20);
    const [severity, setSeverity] = useState(null);

    useEffect(() => {
        console.log("angle=" + angle);
        // setCobbAngle(angle);

        //set scoliosis severity
        var severityValue = "";
        if (cobbAngle <= 10) {
          severityValue = "Normal";
        } else if (10 < cobbAngle <= 25) {
            severityValue = "Mild";
        } else if (25 < cobbAngle <= 45) {
            severityValue = "Moderate";
        } else if (cobbAngle > 45) {
            severityValue = "Severe";
        }
        setSeverity(severityValue);
        setUploadImg(sessionStorage.getItem("uploadedImg"));
        console.log("angle: " + cobbAngle + severity+ "session img: ");
    }, []);


    function downloadReport() {
        console.log("download report....."+cobbAngle+severity);
        const doc = new jsPDF();

        doc.setFont("helvetica");
        //doc.setFontType("normal");
        doc.text(80, 10, "Scoliosis Details Report")
        doc.text(20, 30, "Curve (Cobb angle) of the spine = " + cobbAngle + " degree");
        doc.text(20, 40, "Scoliosis severity = "+severity);

        doc.save('scoliosis_measure_result.pdf');
    }

    return (
        <div className="container">
            
            <h1>Details of the measured scoliosis severity</h1>

            <div className="card" style={{padding: "20px", marginTop: "30px", }}>
                <img className="card-img-top" style={{width: "150px", height: "300px", marginLeft: "auto", marginRight: "auto", display: "block"}} alt="measured img" src={uploadImg}/>
                    <div className="card-body" >
                        <h5 className="card-title" style={{ fontSize: "25px" }}>Measured Curve (Cobb angle) of the spine = {cobbAngle} degree</h5>
                        <p className="card-text" style={{color: "red", fontSize: "23px"}}><strong>NOTE: The actual Cobb angle value can be between {cobbAngle-4} and {cobbAngle+4}.</strong></p>
                        <p className="card-text" style={{fontSize: "23px"}}>Scoliosis severity: <strong>{severity} scoliosis</strong></p>
                            
                        <button className="btn btn-primary" onClick={downloadReport}>DOWNLOAD REPORT</button>
                    </div>
                <br />

            </div>

            <br/>
        </div>
    )
}

export default ScoliosisMeasuredResult;