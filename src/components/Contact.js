// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";
// import contacts from "./data/contacts.json";

const Contact = ({ data }) => {
  return (
    <div className="container">
      <img className="profPic" src={data.photo} alt={data.name}></img>
      <section className="detailContact">
        <h3>{data.name}</h3>
        <p>{data.phone}</p>
        <p>{data.email}</p>
      </section>
    </div>
  );
};

export default Contact;
