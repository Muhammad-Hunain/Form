import React, { useState } from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  FormHelperText,
} from "@mui/material";
// import Challan from "./component/challan";
// import { DesktopDatePicker } from "@mui/lab";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import "../index.css"; // Import custom CSS file for additional styling
// import { useNavigate, useNavigation } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// import { Link, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

// const navigate = useNavigate();

const initialFormData = {
  name: "",
  name_Assesse: "",
  Arrears: "",
  Address: "",
  Select_Date: "",
  Amount: "",
};

function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({
    name: "",
    name_Assesse: "",
    Arrears: "",
    Address: "",
    Select_Date: "",
    Amount: "",
  });

  // ...

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };


  const handleDateChange = (date) => {
    // Handle the date change separately
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    setFormData({ ...formData, Select_Date: formattedDate });
    console.log(formData);
  };
  const navigate = useNavigate(); // Move useNavigate here

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    navigate('/challan',{ state: { formData } }); // Now you can use navigate here
  };
    // if (validateForm()) {

    // }
    // else{
    //     alert('No data Found')
    // }
  

  // Helper function to convert data object to form-urlencoded format
  //   const toFormData = (data) => {
  //     const formData = new URLSearchParams();
  //     for (let key in data) {
  //       formData.append(key, data[key]);
  //     }
  //     console.log(formData.toString());
  //     return formData.toString();
  //   };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    // Validate name
    if (!formData.name) {
      errors.name = "Please enter your name";
      isValid = false;
    }

    // Validate email
    if (!formData.email) {
      errors.email = "Please enter your email";
      isValid = false;
    }
    // Validate phone number
    if (!formData.phone) {
      errors.phone = "Please enter your phone number";
      isValid = false;
    }

    // Validate Adresss
    if (!formData.Address) {
      errors.Address = "Please write a Address";
      isValid = false;
    }

    // Validate name_Assesse
    if (!formData.name_Assesse) {
      errors.name_Assesse = "Please write a Name Assesse";
      isValid = false;
    }
    // Validate Select_Date
    // if (!formData.Select_Date) {
    //   errors.Select_Date = "Please Select Date";
    //   isValid = false;
    // }

    // Validate Amount
    if (!formData.Amount) {
      errors.Amount = "Please write a  Amount";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box sx={{ maxWidth: 500, padding: 2 }}>
        <h2 className="form-heading">PROVINCIAL COTTON FEE</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["StaticDatePicker"]}>
              <DemoItem label="Last Date of Payment">
                <DesktopDatePicker
               name="date"
               value={formData.Select_Date}
               onChange={handleDateChange}
                />
                {/* {formErrors.Select_Date && (
            <FormHelperText error>{formErrors.Select_Date}</FormHelperText>
          )} */}
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
          <TextField
            label="No. In Demand Register (C.F)"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            error={!!formErrors.name}
            className="form-input"
          />
          {formErrors.name && (
            <FormHelperText error>{formErrors.name}</FormHelperText>
          )}

          <TextField
            label="Name of Assesse"
            name="name_Assesse"
            value={formData.name_Assesse}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            error={!!formErrors.name_Assesse}
            className="form-input"
          />
          {formErrors.name_Assesse && (
            <FormHelperText error>{formErrors.name_Assesse}</FormHelperText>
          )}

          <TextField
            label="Arrears"
            name="Arrears"
            type="number"
            value={formData.Arrears}
            onChange={handleChange}
            // required
            fullWidth
            margin="normal"
            // error={!!formErrors.Arrears}
            className="form-input"
          />
          {/* {formErrors.Arrears && (
            <FormHelperText error>{formErrors.Arrears}</FormHelperText>
          )} */}

          <TextField
            label="Amount to be Paid "
            name="Amount"
            type="number"
            value={formData.Amount}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            error={!!formErrors.Amount}
            className="form-input"
          />
          {formErrors.Amount && (
            <FormHelperText error>{formErrors.Amount}</FormHelperText>
          )}

          <TextField
            label="Address"
            name="Address"
            multiline
            // rows={2}
            value={formData.Address}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            error={!!formErrors.Address}
            className="form-input"
          />
          {formErrors.Address && (
            <FormHelperText error>{formErrors.Address}</FormHelperText>
          )}

          <Button variant="contained" type="submit" className="submit-button">
            Generate Challan
           
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default ContactForm;
