import React from 'react';

//import components
import Card from "../../components/card/card";
import Logo from "../../components/logo/logo";

//import stlyes
import "./replay.styles.scss";

const Replay = () => {
  return (
    <div className="container">
    <Logo/>

    <Card title={'Search Replays'} >
    search
    </Card>
        
    </div>);
};

export default Replay;
