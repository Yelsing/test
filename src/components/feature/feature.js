import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle, faCheckCircle, faStopCircle, faCircleNotch, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { FeatureContainer, TitleContainer, Title, Table, Header, Field, CenteredField, Footer, statusColor } from "./feature.styles";

const statusIcon = [faCheckCircle, faExclamationCircle, faStopCircle]
const fields = ['id', 'dev', 'devOutTol', 'status']
const size = "lg"
const color = "white"

export default function Feature({feature}) {
  return  <FeatureContainer>
            <TitleContainer status={feature.status}>
              <FontAwesomeIcon icon={faCircleNotch} size={size} color={color}/>
              <Title>{feature.id}</Title>
              {/** Select icon by status*/}
              <FontAwesomeIcon icon={statusIcon[feature.status]} size={size} color={color}/>
            </TitleContainer>
            <Table id={feature.id}>
              <tbody>
              <tr>{fields.map(field => <Header>{field}</Header>)}</tr>
              {/** Iterate on each control*/
                feature.params.map(param =>
                  <tr>
                    <Field>{param.id}</Field>
                    <CenteredField>{param.dev}</CenteredField>
                    <CenteredField>{param.devOutTol}</CenteredField>
                    <CenteredField>
                      {/** Select icon and color by status*/}
                      <FontAwesomeIcon icon={statusIcon[param.status]} color={statusColor[param.status]}/>
                    </CenteredField>
                  </tr>)}
              </tbody>
            </Table>
            <Footer>
              <FontAwesomeIcon icon={faEllipsisH} />
            </Footer>
          </FeatureContainer>
}