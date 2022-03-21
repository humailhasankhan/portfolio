import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Result = () => {
  return (
    <p>
      Your message has been successfully sent. I will contact you soon. Thank
      you.
    </p>
  );
};

const Contact = () => {
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_b0jd01x", e.target, "s0VjEuQilFlcBury9")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  setTimeout(() => {
    showResult(false);
  }, 6000);

  return (
    <div className="form-section" id="contact">
      <div className="form-container">
        <form action="" onSubmit={sendEmail}>
          <div className="form-area">
            <h1>GET IN TOUCH</h1>
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
            <br />
            <button className="submit-button">SUBMIT</button>

            <div className="row">{result ? <Result /> : null}</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
