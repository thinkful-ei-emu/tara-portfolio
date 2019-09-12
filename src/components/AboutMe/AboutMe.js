import React from 'react';
import './AboutMe.css';

class AboutMe extends React.Component {
  render() {
    return (
    <section id="about-me" class="about-me">
        <header class="section-header">
          <h2>About me</h2>
        </header>

        <div class="section-content about-me-content">
          <p class="about-me-text">
            I am a full-stack web developer enrolled in
            the Engineering Immersion program at Thinkful.
          </p>

          <img
            src="https://github.com/thinkful-ei-emu/tara-portfolio/blob/master/Images/at-taj.jpg?raw=true"
            alt="T.J. Patel at Taj Mahal"
          />

          <p class="about-me-text">
            In my past endeavors, I’ve always found joy in re-engineering
            systems to better meet the goals of my organization--
            from redesigning my college's committee system to
            planning projects for teenagers as a
            teacher. Coding gives
            me the opportunity to incorporate that joy into my daily work.
          </p>

          <p class="about-me-text">
            Despite now finding coding a constant source of fulfillment, I never really even considered this path a possibility for me,
            an teacher with a degree in history and economics. It was at
            a wedding, talking to someone I hadn’t seen in years, when I first
            heard about coding school and then made one of the most exciting
            choices of my lifetime.
          </p>

          <img
            src="https://github.com/thinkful-ei-emu/tara-portfolio/blob/master/Images/mencharlie.jpg?raw=true"
            alt="T.J. Patel with a dog"
          />

          <p class="about-me-text">
            After I’ve had my fill of functions and for loops, I spend my time 
            writing music, <a href="https://youtu.be/M1p3MRYI8TI"> playing guitar</a>, board games, or video
            games, or daydreaming about starting a waste-free
            full-service grocery store here in Houston, Texas. I always try to
            find time to travel, but if I can’t get out of town, exploring the many
            incredible restaurants of America's most diverse city, Houston, will
            do.
          </p>

          

          

          <p class="about-me-text">
            My personal projects so far have been ambitious and fulfilling. My Dungeons and Dragons character creator fills a need I saw in my personal life and was an absolute thrill to put together. I'm excited to transfer the knowledge I've gained into meaningful work for companies I can be proud to work for.
          </p>
        </div>
      </section>);
  }
}

export default AboutMe;