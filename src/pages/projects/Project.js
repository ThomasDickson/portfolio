import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

import Navbar from '../../components/Navbar';
import { T2, T4 } from '../../components/Typography'
import { FilledButton } from '../../components/Buttons';
import { Card } from '../../components/Cards';
import RatingBar from '../../components/RatingBar'

import { projects } from './ProjectData'

const Grid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;

  gap: 24px;

  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`

function Project() {
  const url = useParams().url;
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [alt, setImgAlt] = useState("");
  const [desc, setDesc] = useState("");
  const [git, setGit] = useState("");
  const [live, setLive] = useState("");
  const [langs, setLangs] = useState([]);
  
  useEffect(() => {
    function setData() {
      for(var i = 0; i < projects.length; i++) {
        var object = projects[i];

        if(object.redir === url) {
          setTitle(object.title);
          setImage(object.image);
          setImgAlt(object.alt);
          setDesc(object.desc);

          if(object.hasOwnProperty('git'))
            setGit(object.git);

          if(object.hasOwnProperty('live'))
            setLive(object.live)

          setLangs(object.langs);
        }
      }
    }
    setData();
  })  
  return (
    <div className="project">
      <Navbar buttons={false}/>
      <Grid>
        <div className="info-box">
          <T2>{title}</T2>
          <T4>{desc}</T4>
          <Card>
            <T2>Development Languages</T2>
            { // Render a Rating Bar for each language from JSON
            langs.map(post => {
              return (
                <RatingBar desc={post.lang} percent={post.level}/>
              )
            })}
          </Card>
          <div style={{display: "flex", gap: "12px", marginTop: "12px"}}>
            {git && (
                <FilledButton as={'a'} href={git} target="_blank">View source</FilledButton>
            )}
            {live && (
                <FilledButton as={'a'} href={live} target="_blank">View live</FilledButton>
            )}
          </div>
        </div>
        <img src={image} alt={alt} style={{width: "100%", borderRadius: "9px"}}/>
      </Grid>
    </div>
  )
}

export default Project