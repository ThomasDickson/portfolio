import React, { useEffect, useState } from 'react'
import { T1, T2, T3, T4 } from '../../components/Typography'
import { projects } from './ProjectData'
import { useParams } from 'react-router-dom'
import { setActiveLink } from 'react-scroll/modules/mixins/scroller';

function Project() {
  const url = useParams().url;
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [alt, setImgAlt] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    for(var i = 0; i < projects.length; i++) {
      var object = projects[i];

      if(object.redir == url) {
        setTitle(object.title);
        setImage(object.image);
        setImgAlt(object.alt);
        setDesc(object.desc);
      }
    }
  })  
  return (
    <div className="project">
      <T2>{title}</T2>
      <T4>{desc}</T4>
      <img src={image} alt={alt}/>
    </div>
  )
}

export default Project