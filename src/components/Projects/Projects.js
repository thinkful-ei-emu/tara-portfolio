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
      tech: 'JavaScript, CSS3, React, React Router, Node.js, Express, Mocha, Chai, Cypress, PostgreSQL, JSON Web Tokens, bcrypt',
      server:'https://github.com/thinkful-ei-emu/Zane-Tara-Spaceful-Repetition-Client',
      client: 'https://github.com/thinkful-ei-emu/Zane-Tara-Spaceful-Repetition-Client',
      live: 'https://aprende.tara-zane.now.sh/login'
    };

    const DnD = {
      desktop1:
        'https://raw.githubusercontent.com/tarajeanne/image_repo/master/dnd-desktop-1.png',
      desktop1Alt: 'View of character creator home screen',
      desktop2: 'https://raw.githubusercontent.com/tarajeanne/image_repo/master/dnd-desktop-2.png',
      desktop2Alt: 'view of character creator character sheet print screen',
      mobile1:'https://raw.githubusercontent.com/tarajeanne/image_repo/master/dnd-mobile-1.png',
      mobile1Alt:'view of character creator class selection screen on mobile',
      mobile2: 'https://raw.githubusercontent.com/tarajeanne/image_repo/master/dnd-mobile-2.png',
      mobile2Alt: 'view of character creator stats generation screen on mobile',
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

    const symptomTracker = {
      desktop1:
        'https://raw.githubusercontent.com/tarajeanne/image_repo/master/symptom-desktop-1.png',
      desktop1Alt: 'View of user dashboard',
      desktop2: 'https://raw.githubusercontent.com/tarajeanne/image_repo/master/symptom-desktop-2.png',
      desktop2Alt: 'View of add symptom screen',
      mobile1:'https://raw.githubusercontent.com/tarajeanne/image_repo/master/symptom-mobile-1.png',
      mobile1Alt:'View of add meal on mobile',
      mobile2: 'https://raw.githubusercontent.com/tarajeanne/image_repo/master/symptom-mobile-2.png',
      mobile2Alt: 'View of dashboard on mobile',
      desc:
        'An application that allows enables users to track illnesses and foods they eat to identify relationships.',
      expandedDesc:
        'Symptom Tracker\'s targeted user experiences chronic symptoms that may be related to the foods they eat. On the app, users can log the foods they eat with a search powered by the USDA database. Additionally, they can log symptoms they experience. On their dashboard, they can see a log of their meals and symptoms. On our server, we run an algorithm that searches through all the instances of that symptom and identifies the meals eaten within a user-defined temporal threshold and delivers the most relevant ingredients back to the user.',
      name: 'Symptom Tracker',
      tech: 'JavaScript, CSS3, React, React Router, Chart.js, Node.js, Express, Mocha, Chai, Jest, PostgreSQL, JSON Web Tokens, bcrypt',
      server:'https://github.com/thinkful-ei-emu/RAMbo-Tracker-Server',
      client: 'https://github.com/thinkful-ei-emu/RAMbo-Tracker-client',
      live: 'https://symptomtracker.rambo.now.sh/'
    }
    return (
      <section id="projects">
        <header class="section-header">
          <h2>My projects</h2>
        </header>
        <div class="section-content project-content">
          <ProjectTile data={DnD} />
          <ProjectTile data={symptomTracker} />
          <ProjectTile data={spacedRepetition} />
        </div>
      </section>
    );
  }
}

export default Projects;
