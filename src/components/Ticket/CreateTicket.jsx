import React, { useEffect, useState } from "react";
import "./createTicket.css";
import Navbar from "../Navgator/Navbar";

const NewTicketPage = () => {
  const [formData, set_formData] = useState({
    leadSource: "choose",
    name: "",
    contactNumber: "",
    email: "",
    vehicleMake: "",
    vehicleRegistrationNumber: "",
    breakdownIssue: "",
    location: "",
    serviceFee: Number,
    comments: "",
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState({
    status: false,
    msg: "",
  });

  const onChangeHandler = (e) => {
    let name = e.target.name;

    if (name === "vehicleRegistrationNumber") {
      let value = e.target.value;
      set_formData({ ...formData, [name]: value.trim().toUpperCase() });
    } else {
      set_formData({ ...formData, [name]: e.target.value });
    }
  };
const removePop =()=>{
  setShowSuccessPopup({
    status: false,
    msg: "",
  })
}
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.leadSource==="choose") {
      setShowSuccessPopup({ status: true, msg: "Please choose the Source lead" });
    }else{
      setShowSuccessPopup({ status: true, msg: "New Task Created Successfully" });

    }
    

  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div>
      <Navbar currentPage="new"></Navbar>
      <div className="new-ticket-page">
        <h2 className="form-title">Create New Ticket</h2>
        <form onSubmit={handleSubmit}>
          <label className="lable" htmlFor="leadsource">
            Lead Source*
          </label>

          <select
            name="leadSource"
            id="leadsource"
            required
            value={formData.leadSource}
            onChange={onChangeHandler}
          >
            <option value="choose">Choose</option>
            <option value="Web">Web</option>
            <option value="Chat">Chat</option>
            <option value="Call">Call</option>
          </select>

          <label>Name*</label>
          <input
            type="text"
            value={formData.name}
            name="name"
            onChange={onChangeHandler}
            required
          />

          <label>Contact Number*</label>
          <input
            type="number"
            value={formData.contactNumber}
            name="contactNumber"
            maxLength={10}
            onChange={onChangeHandler}
            required
          />

          <label>Email Address*</label>
          <input
            type="email"
            value={formData.email}
            name="email"
            onChange={onChangeHandler}
            required
          />

          <label>Vehicle Make*</label>
          <input
            type="text"
            maxLength={10}
            value={formData.vehicleMake}
            name="vehicleMake"
            onChange={onChangeHandler}
            required
          />

          <label>Vehicle Registration Number*</label>
          <input
            type="text"
            value={formData.vehicleRegistrationNumber}
            name="vehicleRegistrationNumber"
            maxLength={10}
            onChange={onChangeHandler}
            required
          />

          <label>Breakdown Issue*</label>
          <input
            type="text"
            value={formData.breakdownIssue}
            name="breakdownIssue"
            onChange={onChangeHandler}
            required
          />

          <label>Location*</label>
          <input
            type="text"
            value={formData.location}
            name="location"
            onChange={onChangeHandler}
            required
          />

          <label>Service Fee</label>
          <input
            type="number"
            value={formData.serviceFee}
            name="serviceFee"
            onChange={onChangeHandler}
          />

          <label>Assistance Time*</label>
          <input
            type="date"
            id="dateInput"
            value={formData.assistanceTime}
            name="assistanceTime"
            onChange={onChangeHandler}
            required
          />

          <label>Comments*</label>
          <textarea
            value={formData.comments}
            name="comments"
            onChange={onChangeHandler}
            required
          />

          <button type="submit">Submit</button>
        </form>
        {showSuccessPopup.status && (
          <div className="popup">
           <span onClick={removePop} style={{fontSize:"20px",textAlign:"right",cursor:"pointer"}}>✖</span>
            <p>{showSuccessPopup.msg}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewTicketPage;
