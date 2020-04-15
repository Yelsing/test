import React from 'react';
import { PartContainer, Title } from "./part.styles";
import Feature from "../feature/feature"

export default function Part({part}) {
  return <fragment>
            <Title>{part.id}</Title>
            <PartContainer>
              {/** Iterate on each feature*/
                part.features.map(feature => <Feature feature={feature}/>)}
            </PartContainer>
          </fragment>
}