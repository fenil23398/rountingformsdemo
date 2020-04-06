import React, { Component } from 'react';
import Header from '../Header/index';
import MainFile from '../Mainfile/index';
import Form2 from '../Form2/index';
import Form1 from '../Form1/index';
import { Switch,Route,Redirect } from 'react-router-dom';

export default class ManinFile extends Component {
    render() {
        return (
            <div>
                
                <Header />
                <h1> Main  Componenet  Rendering </h1>
                <Switch>
                    <Route exact path='/home' component={MainFile} />
                    
                    {/* From below way we can pass Props to components */}
                    <Route exact path='/form1' component={()=><Form1 />} />
                    <Route path='/form2' component={Form2} />
                    {/* <Redirect to="/home" /> */}
                </Switch>
            </div>
        )
    }
}
