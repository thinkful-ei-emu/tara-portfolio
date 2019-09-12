import React from 'react';
import './Contact.css';

class Contact extends React.Component {
  render() {
    return (
      <section id="contact">
      <header class="section-header">
        <h2>Contact</h2>
      </header>

      <div class="section-content contact-content">
        <ul>
          <li>
            <a
              href="mailto:t.jeanne.patel@gmail.com?Subject=Re:%20Your%20portfolio"
              target="_top"
              >Email</a>
          </li>
          <li>
            <a href="https://github.com/tarajeanne?tab=repositories"
              >GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/tara-patel-45627a56/"
              >LinkedIn</a>
          </li>
        </ul>
      </div>
    </section>
    )
  }
}

export default Contact;