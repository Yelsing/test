import styled from "styled-components"

export const statusColor = [`green`,`gold`,`red`]

export const FeatureContainer = styled.div`
  background-color: grey;
  display: flex;
  flex-direction: column;
  margin: 2px;
`
/** Set background color by status*/
export const TitleContainer = styled.div`
  background-color: ${props => statusColor[props.status]};
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  padding: 10px;
`
export const Footer = styled.div`
  background-color: #F5F5F5;
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 10px;
`

export const Title = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  color: #ffffff;
  font-size: 22px;
  text-align: center;
`

export const Table = styled.table`
  margin-bottom: auto;
`

export const Field = styled.td`
  padding: 10px;
`

export const CenteredField = styled(Field)`
  text-align: center;
`

export const Header = styled(Field)`
  font-weight: 600;
`