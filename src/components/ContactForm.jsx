import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  const [contactInfo, setContactInfo] = useState({
    fullName: "",
    subject: "",
    email: "",
    message: "",
  });
  const { fullName, subject, email, message } = contactInfo;
  const handelChange = (e) => {
    setContactInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handelSend = (e) => {
    e.preventDefault();
    console.log(contactInfo)
    // if(window.Email){
    //   window.Email.send({
    //     Host: "smtp.elasticemail.com",
    //     Username: "info.test.asd@gmail.com",
    //     Password: "DF6D16C8BD12B945479B06CA67E0C6E276A0",
    //     To: "info.test.asd@gmail.com",
    //     port:2525,
    //     From: email,
    //     Subject: subject,
    //     Body: `
    //       <h1> ${fullName} </h1>
    //       <p> ${subject} </p>
    //       <p> ${message} </p>

    //     `
    //   }).then((res) => console.log("email is sent")).catch(err=>{
    //     console.log(err)
    //   });
    // }
    setContactInfo({
      fullName: "",
      subject: "",
      email: "",
      message: "",
    });
  };
  return (
    <div className="contact-form">
      <form  autoComplete="off" onSubmit={handelSend}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder={t("HEADING.FULLNAME")}
            required
            name="fullName"
            value={fullName}
            onChange={handelChange}
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder={t("HEADING.SUBJECT")}
            required
            name="subject"
            value={subject}
            onChange={handelChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder={t("HEADING.EMAIL")}
            required
            name="email"
            value={email}
            onChange={handelChange}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder={t("HEADING.MESSAGE")}
            rows="3"
            required
            name="message"
            value={message}
            onChange={handelChange}
          ></textarea>
        </div>
        <button className="read-more">{t("BUTTONS.SEND")}</button>
      </form>
    </div>
  );
};

export default ContactForm;
