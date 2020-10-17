import React from 'react';
import './ExploreContainer.css';
import Map from './Map'
import styled from 'styled-components'

interface ContainerProps { }

const MapFrame = styled.div`
  width: 100%;
  height: 100%;
`

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    // <div className="container">
      <MapFrame>
        <Map/>
      </MapFrame>
    // </div>
  );
};

export default ExploreContainer;
