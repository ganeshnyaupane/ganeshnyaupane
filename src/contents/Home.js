import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/ganesh.png';
import Social from '../components/Social';
class Home extends Component {
render() {
return (
<div className="condiv home">
<img src={profilepic} className="profilepic"></img>
<ReactTypingEffect className="typingeffect" text={['I am Ganesh Nyaupane','I am a Software Development Engineer']} speed={100} eraseDelay={700}/>

<Social/>
</div>
)
}
}
export default Home