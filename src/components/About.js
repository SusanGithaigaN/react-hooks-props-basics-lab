import React from "react";
import Links from "./Links";

function About(props) {
  const myParagraph = props.bio;
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* render a <p> element if the bio is an empty string */}
      {
        myParagraph && <p>{props.bio}</p>
      }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin}/>
      
    </div>
  );
}

export default About;
