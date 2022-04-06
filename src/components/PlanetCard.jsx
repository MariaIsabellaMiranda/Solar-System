import React from 'react';

class PlanetCard extends React.Component {
  render() {
    return (
      <div className="listaPlanetas" data-testid="planet-card">
        <p data-testid="planet-name">{ this.props.planetName }</p>
        <img src={ this.props.planetImage } alt={ this.props.planetName }></img>
      </div>
    );
  }
}

export default PlanetCard;
