import React, { useState } from 'react';

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h1>Contact Me</h1>
        {messageSent ? (
          <p>Thank you for your message! I’ll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        )}
        <p>Or email me directly at <a href="mailto:mtimkuluoscar@gmail.com">mtimkuluoscar@gmail.com</a></p>
      </div>
    </section>
  );
};

export default Contact;
