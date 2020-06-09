import React from "react"

const Contact = props => (
  <section id="contact-form">
    <span style={{ marginBottom: 60, display: "block" }}>Contact Us</span>
    <form
      name="contact"
      method="post"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <div className="field half first">
        <label htmlFor="firstname">First Name</label>
        <input type="text" name="firstname" id="firstname" required />
      </div>
      <div className="field half">
        <label htmlFor="lastname">Last Name</label>
        <input type="text" name="lastname" id="lastname" required />
      </div>
      <div className="field half first">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" required />
      </div>
      <div className="field half">
        <label htmlFor="phone">Phone</label>
        <input type="text" name="phone" id="phone" required />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="6" required></textarea>
      </div>
      <div className="field">
        <input type="submit" value="Send" className="button" />
      </div>
    </form>
  </section>
)

export default Contact
