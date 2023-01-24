import React from 'react';
import styled from 'styled-components';
import { T4 } from './Typography'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const BackgroundBar = styled.div`
    margin-left: 12px;
    padding: 3px;
    border-radius: 12px;
    width: 400px;
    height: 12px;
    background-color: #21705C;
`

const FilledBar = styled.div`
    border-radius: inherit;
    height: inherit;
    background-color: #41e2ba;
`

function RatingBar({desc, percent}) {
  return (
    <Container>
      <T4 style={{fontWeight: "400"}}>{desc}</T4>
      <BackgroundBar>
        <FilledBar style={{width: percent}}/>
      </BackgroundBar>
    </Container>
  )
}

export default RatingBar