import React from 'react';
import ProjectTile from './ProjectTile';
import './Projects.css'

class Projects extends React.Component {
  render() {
    const spacedRepetition = {
      desktop1:
        'https://github.com/tarajeanne/image_repo/blob/master/Aorende%20desktop%201.png?raw=true',
      desktop1Alt: 'Aprende desktop screenshot',
      desktop2: 'https://github.com/tarajeanne/image_repo/blob/master/Aprende%20desktop%202.png?raw=true',
      desktop2Alt: 'Aprende desktop screenshot',
      mobile1:'https://github.com/tarajeanne/image_repo/blob/master/aprende%20mobile%201.png?raw=true',
      mobile1Alt:'Aprende mobile screenshot',
      mobile2: 'https://github.com/tarajeanne/image_repo/blob/master/aprende%20mobile%202.png?raw=true',
      mobileAlt: 'Aprende mobile screenshot',
      desc:
        'An application that uses a research-based learning technique for foreign language acquisition.',
      expandedDesc:
        'Upon login, users can see a list of words they are practicing. When the user clicks the practice button, they are shown a word chosen based on a spaced repetition algorithm. The algorithm is implemented in the server by manipulating a singly linked list in the database. Upon a correct answer, that word moves back in the list many spaces, depending on how often the user gets it right. If the user gets it wrong, it moves back only one space, and the user sees it sooner.',
      name: '¡Aprende!',
      tech: 'JavaScript, CSS3, React, React Router, Node.js, Express, Mocha, Chai, Enzyme, PostgreSQL, JSON Web Tokens, bcrypt',
      server:'https://github.com/thinkful-ei-emu/Zane-Tara-Spaceful-Repetition-Client',
      client: 'https://github.com/thinkful-ei-emu/Zane-Tara-Spaceful-Repetition-Client',
      live: 'https://aprende.tara-zane.now.sh/login'
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
          <ProjectTile data={spacedRepetition} />
        </div>
      </section>
    );
  }
}

export default Projects;
