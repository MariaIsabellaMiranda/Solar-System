import React from 'react';

class MissionCard extends React.Component {
  render() {
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name">{this.props.name}</p>
        <p data-testid="mission-year">{this.props.year}</p>
        <p data-testid="mission-country">{this.props.country}</p>
        <p data-testid="mission-destination">{this.props.destination}</p>
      </div>
    );
  }
}

export default MissionCard;
