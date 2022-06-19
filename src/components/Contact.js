// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";
// import contacts from "./data/contacts.json";

const Contact = (props) => {
  return (
    <div className="Contact">
      <img className="profPic" src={props.photo} alt="profile"></img>
      <section className="detailContact">
        <h3>{props.name}</h3>
        <p>{props.phone}</p>
        <p>{props.email}</p>
      </section>
    </div>
  );
};

export default Contact;
