import React from 'react';
import ProjectTile from './ProjectTile';
import './Projects.css'

class Projects extends React.Component {
  render() {
    const triviaTraining = {
      desktop1:
        'https://github.com/thinkful-ei-emu/tara-portfolio/blob/master/Images/trivia-training-desktop.png?raw=true',
      desktop1Alt: 'Trivia Training app desktop screenshot',
      desktop2: '',
      desktop2Alt: '',
      mobile1:'',
      mobile1Alt:'',
      desc:
        'An interactive game that allows users to test their knowledge over random topics.',
      expandedDesc:
        'As users play through the game, they get feedback about their responses, and can track their score at the top of the screen. At the end of the game, the user finds out whether or not they got a new high score.',
      name: 'Trivia Training',
      tech: 'JavaScript, HTML, CSS, JQuery'
    };

    const DnD = {
      desktop1:
        'https://github.com/tarajeanne/image_repo/blob/master/desktop_printscreen.png?raw=true',
      desktop1Alt: 'View of character creator home screen',
      desktop2: 'https://github.com/tarajeanne/image_repo/blob/master/destop_homepage.png?raw=true',
      desktop2Alt: 'view of character creator character sheet print screen',
      mobile1:'https://github.com/tarajeanne/image_repo/blob/master/phone_backgroundscreen.png?raw=true',
      mobile1Alt:'view of character creator background selection screen',
      mobile2: 'https://github.com/tarajeanne/image_repo/blob/master/phone_statscreen.png?raw=true',
      mobile2Alt: 'view of character creator stats generation screen',
      desc:
        'An application that walks users through the steps of creating a character for Dungeons and Dragons.',
      expandedDesc:
        'Upon login, users can see a list of their characters and create new ones. Once created, the app walks the user through the basic parts of creating a character. The stats screen updates live based on user selections, and informs the user how they got certain options. Finally, the app populates vital information in a character sheet that can be printed directly from the browser. This app will expand slowly as I find time to convert the Dungeons and Dragons core rulebook into JavaScript data structures.',
      name: 'Dungeons and Dragons Character Creator',
      tech: 'JavaScript, CSS3, React, React Router, Node.js, Express, Mocha, Chai, Enzyme, PostgreSQL, JSON Web Tokens, bcrypt',
      server:'https://github.com/tarajeanne/dnd-server',
      client: 'https://github.com/tarajeanne/dnd-client',
      live: 'https://dnd-creator.tjeannepatel.now.sh/'
    };
    return (
      <section id="projects">
        <header class="section-header">
          <h2>My projects</h2>
        </header>
        <div class="section-content project-content">
          <ProjectTile data={DnD} />
        </div>
      </section>
    );
  }
}

export default Projects;
