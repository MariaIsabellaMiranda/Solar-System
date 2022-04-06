import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline={'Planetas'} />
        {Planets.map((planeta) => (
          <ol>
            <li key={planeta.name}>
              <PlanetCard planetName={planeta.name} planetImage={planeta.image} />
            </li>
          </ol>
        ))}
      </div>
    );
  }
}

export default SolarSystem;
