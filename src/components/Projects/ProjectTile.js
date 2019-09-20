import React from 'react';

class ProjectTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
  }

  render() {
    return (
      <div className="project">
        <div className="project-title">
          <h3>{this.state.name}</h3>
        </div>
        <div className="project-text">
          <h4>About</h4>
          <p>{this.state.desc}</p>

          <p>{this.state.expandedDesc}</p>
          <h4>Technologies used:</h4>
          <div className="tech-icons">
            <p>{this.state.tech}</p>
          </div>
          <h4>Links</h4>
          <ul className="link-section">
            <li className="project-link">
              <a href={this.state.client}>Client Repository</a>
            </li>
            <li className="project-link">
              <a href={this.state.server}>Server Repository</a>
            </li>
            <li className="project-link">
              <a href={this.state.live}>Live Demo</a>
            </li>
          </ul>
        </div>
        <div className="project-images">
          <img
            className="desktop-screenshot"
            src={this.state.desktop1}
            alt={this.state.desktop1Alt}
          />
          <img
            className="desktop-screenshot"
            src={this.state.desktop2}
            alt={this.state.desktop2Alt}
          />
          <img
            className="mobile-screenshot"
            src={this.state.mobile1}
            alt={this.state.mobile1Alt}
          />
          <img
            className="mobile-screenshot"
            src={this.state.mobile2}
            alt={this.state.mobile2Alt}
          />
        </div>
      </div>
    );
  }
}

export default ProjectTile;
