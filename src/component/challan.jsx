import img from "../assets/logo.png";
import { useLocation } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
const challan = () => {

  const location = useLocation();
  const data = location.state?.formData || 'No data received yet.';

  const total = parseInt(data.Amount) + parseInt(data.Arrears);
  
  

  return (
    <div style={{ margin: "50px auto", width: "80%",display:"flex" }} border>
      <div className="col-md-4 col-sm-12 border">
            {/*  */}
            <div className="header d-flex align-items-center" >
                  <img style={{width:"120px"}} src={img} alt="" />
                  <h2>PROVINCIAL COTTON FEE</h2>
                </div>
              <div className="text-center ">
              
                <h6 style={{ fontWeight: 800 }}>
                  <u>B-03055</u>
                </h6>
                <span>FORM: C.F</span>
                <br />
                <span>SEE RULE: 25 (3)</span>
              </div>

              <div>
                <p>Cotton Fee is levied under the Cotton Control Ordinance 1966</p>
                <p>
                  <b>Last Date of Payment: {data.Select_Date}</b>
                </p>

                <p>
                  <b>No. In Demand Register (C.F):{data.name} </b>
                </p>

                <p>
                  Name of Assesse:{" "}
                  <u>
                    <b> {data.name_Assesse}</b>
                  </u>
                </p>

                <p>
                  Address:{" "}
                  <u>
                    <b>{data.Address}</b>
                  </u>
                </p>

                <table border={2} className="col-12 mb-5">
                  <tr>
                    <td>Arrears</td>
                    <td>{data.Arrears}</td>
                  </tr>

                  <tr>
                    <td>Amount to be Paid</td>
                    <td>{data.Amount}</td>
                  </tr>

                  <tr>
                    <td>Total </td>
                    <td>{total}</td>
                  </tr>

                  <tr>
                    <td>Within Due Date: </td>
                    <td>{total}</td>
                  </tr>

                  <tr>
                    <td>After Due Date: </td>
                    <td>{total + (2000)}</td>
                  </tr>
                </table>

                <span>Phutty Arrived</span>
                <br />
                <span>During the Month of __________ 2022-2023</span>

                <p className="mb-2 mt-5 d-flex justify-content-end">
                  Signature & Stamp
                </p>
              </div>

      {/*  */}
      </div>
      <div className="col-md-4 col-sm-12 border">

        {/*  */}
        <div className="header d-flex align-items-center" >
                  <img style={{width:"120px"}} src={img} alt="" />
                  <h2>PROVINCIAL COTTON FEE</h2>
                </div>
              <div className="text-center ">
              
                <h6 style={{ fontWeight: 800 }}>
                  <u>B-03055</u>
                </h6>
                <span>FORM: C.F</span>
                <br />
                <span>SEE RULE: 25 (3)</span>
              </div>

              <div>
                <p>Cotton Fee is levied under the Cotton Control Ordinance 1966</p>
                <p>
                <b>Last Date of Payment: {data.Select_Date}</b>
                </p>

                <p>
                  <b>No. In Demand Register (C.F):{data.name} </b>
                </p>

                <p>
                  Name of Assesse:{" "}
                  <u>
                    <b> {data.name_Assesse}</b>
                  </u>
                </p>

                <p>
                  Address:{" "}
                  <u>
                    <b>{data.Address}</b>
                  </u>
                </p>

                <table border={2} className="col-12 mb-5">
                  <tr>
                    <td>Arrears</td>
                    <td>{data.Arrears}</td>
                  </tr>

                  <tr>
                    <td>Amount to be Paid</td>
                    <td>{data.Amount}</td>
                  </tr>

                  <tr>
                    <td>Total </td>
                    <td>{total}</td>
                  </tr>

                  <tr>
                    <td>Within Due Date: </td>
                    <td>{total}</td>
                  </tr>

                  <tr>
                    <td>After Due Date: </td>
                    <td>{total + (2000)}</td>
                  </tr>
                </table>

                <span>Phutty Arrived</span>
                <br />
                <span>During the Month of __________ 2022-2023</span>

                <p className="mb-2 mt-5 d-flex justify-content-end">
                  Signature & Stamp
                </p>
              </div>

      {/*  */}
      </div>
      <div className="col-md-4 col-sm-12 border">

        {/*  */}
        <div className="header d-flex align-items-center" >
                  <img style={{width:"120px"}} src={img} alt="" />
                  <h2>PROVINCIAL COTTON FEE</h2>
                </div>
              <div className="text-center ">
              
                <h6 style={{ fontWeight: 800 }}>
                  <u>B-03055</u>
                </h6>
                <span>FORM: C.F</span>
                <br />
                <span>SEE RULE: 25 (3)</span>
              </div>

              <div>
                <p>Cotton Fee is levied under the Cotton Control Ordinance 1966</p>
                <p>
                <b>Last Date of Payment: {data.Select_Date}</b>
                </p>

                <p>
                  <b>No. In Demand Register (C.F):{data.name} </b>
                </p>

                <p>
                  Name of Assesse:{" "}
                  <u>
                    <b> {data.name_Assesse}</b>
                  </u>
                </p>

                <p>
                  Address:{" "}
                  <u>
                    <b>{data.Address}</b>
                  </u>
                </p>

                <table border={2} className="col-12 mb-5">
                  <tr>
                    <td>Arrears</td>
                    <td>{data.Arrears}</td>
                  </tr>

                  <tr>
                    <td>Amount to be Paid</td>
                    <td>{data.Amount}</td>
                  </tr>

                  <tr>
                    <td>Total </td>
                    <td>{total}</td>
                  </tr>

                  <tr>
                    <td>Within Due Date: </td>
                    <td>{total}</td>
                  </tr>

                  <tr>
                    <td>After Due Date: </td>
                    <td>{total + (2000)}</td>
                  </tr>
                </table>

                <span>Phutty Arrived</span>
                <br />
                <span>During the Month of __________ 2022-2023</span>

                <p className="mb-2 mt-5 d-flex justify-content-end">
                  Signature & Stamp
                </p>
              </div>

      {/*  */}
      </div>
    </div>
  );
};

export default challan;
