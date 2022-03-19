import React from "react";
import "./Contact.css";

const Contact = (props) => {
  return (
    <div className="form-section">
      <div className="form-container">
        <form action="" onSubmit="">
          <div className="form-area">
            <h1>LET'S TALK!</h1>
            <br />
            <input
              className="input100"
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
            />
            <br />
            <br />
            <input
              className="input100"
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
            />
            <br />
            <br />
            <input
              className="input100"
              type="text"
              name="email"
              placeholder="Enter Email"
              required
            />
            <br />
          </div>
          <div className="formWord">
            <br />
            <textarea
              className="message"
              name="message"
              placeholder="Message"
              required
            ></textarea>
            <br />
            <button className="submit-button">SUBMIT</button>

            <div className="row"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
