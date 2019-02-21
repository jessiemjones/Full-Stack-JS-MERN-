import React, { Component } from 'react';
import './App.css';
import Box from "./Box"

const App = () => {
  return (
      <div className="boxes">
          <Box color="red" title="Red Box, motha fucka" subtitle="<3" information=""/>
          <Box color="orange" title="It's an orange box" subtitle="it really is" information="I made it to look like a rainbow"/>
          <Box color="yellow" title="Yellow box" subtitle="so pretty" information="Yellow is the third color of ROYGBIV"/>
          <Box color="green" title="Like paper" subtitle="makin stacks" information="Give me monies"/>
          <Box color="blue" title="I'm blue dahba dee dahba die" subtitle="A beautiful song" information="This song was made before music turned real bad"/>
          <Box color="indigo" title="In da couch" subtitle="This is a color" information="Indigo is bascially purple"/>
          <Box color="violet" title="Anotha one" subtitle="Violets are a thing, right?" information="I really like my colors"/>
          <Box color="pink" title="Nobody actually likes pink" subtitle="I am subtitle" information="A subtitle usually goes below the title."/>
          <Box color="beige" title="What are you wearing?" subtitle="Uhhhhh Kahkis?" information="She sounds hideous"/>
          <Box color="lightGrey" title="I see skys a blue" subtitle="red roses too" information="And I think to myself... what a wonderful world"/>
      </div>
  )
}

export default App;
