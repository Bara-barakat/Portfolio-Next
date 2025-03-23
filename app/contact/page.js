"use client";

import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaGoogle } from "react-icons/fa";
import emailjs from "emailjs-com";
import "./stylecontact.css";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    emailjs
      .sendForm(
        "service_h53t2su",
        "template_0acwhev",
        form,
        "0Dl1eaabublVVxy_Q"
      )
      .then(
        (result) => {
          console.log("Message sent", result.text);
        },
        (error) => {
          console.error("Error sending message", error.text);
        }
      );
  };

  return (
    <div className="containerwork">
      <h2>Contact Us</h2>
      <p>
        We'd love to hear from you! Please fill out the form below to get in
        touch.
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="form-input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="form-input"
          required
        />
        <textarea
          name="message"
          placeholder="Write your message here..."
          className="form-input"
          required
        />
        <button type="submit" className="submit-btn">
          Send
        </button>
      </form>

      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/bara-barakat-330418296"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="social-icon" />
        </a>
        <a href="mailto:barabarakat700@gmail.com">
          <FaGoogle className="social-icon" />
        </a>
        <a
          href="https://wa.link/6ffdlp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="social-icon" />
        </a>
        <a
          href="https://github.com/Bara-barakat?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="social-icon" />
        </a>
      </div>
    </div>
  );
}
