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
          <div className="about-images">
            <img
              className="about-image"
              src="https://raw.githubusercontent.com/tarajeanne/image_repo/master/at-taj.jpg"
              alt="T.J. Patel at Taj Mahal"
            />
            <img
              className="about-image"
              src="https://raw.githubusercontent.com/tarajeanne/image_repo/master/mencharlie.jpg"
              alt="T.J. Patel with a dog"
            />
          </div>

          <div className="about-text-area">
            <p class="about-me-text">
              I am a full-stack developer recently graduated from the Thinkful
              Engineering Immersion program.
            </p>

            <p class="about-me-text">
              In my past endeavors, I’ve always found joy in re-engineering
              systems to better meet the goals of my organization--from
              redesigning my college's committee system to planning projects for
              teenagers as a teacher. Coding gives me the opportunity to
              incorporate that joy into my daily work.
            </p>

            <p class="about-me-text">
              Despite now finding coding a constant source of fulfillment, I
              never really even considered this path a possibility for me, a
              teacher with a degree in history and economics. It was at a
              wedding, talking to someone I hadn’t seen in years, when I first
              heard about coding school and then made one of the most exciting
              choices of my lifetime.
            </p>

            <p class="about-me-text">
              After I’ve had my fill of functions and for loops, I spend my time
              writing music,{' '}
              <a href="https://youtu.be/M1p3MRYI8TI"> playing guitar</a>, board
              games, or video games, or daydreaming about starting a waste-free
              full-service grocery store here in Houston, Texas. I always try to
              find time to travel, but if I can’t get out of town, exploring the
              many incredible restaurants of America's most diverse city,
              Houston, will do.
            </p>

            <p class="about-me-text">
              My personal projects so far have been ambitious and fulfilling,
              and I still actively improve them. I built them to solve real
              issues I saw in my daily life, meticulously designing every
              detail to suit the particular needs of the problem. I'm excited to
              transfer those skills into meaningful work for
              companies I can be proud to work for.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutMe;
