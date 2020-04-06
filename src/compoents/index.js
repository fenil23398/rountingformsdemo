import React, { Component } from 'react'
import { Switch,Route,Redirect } from 'react-router-dom';
import Form2 from './Form2/index';
import MainFile from './Mainfile/index';
import Form1 from './Form1/index';
import Header from './Header/index';


export default class Routing extends Component {
    render() {
        return (
            <div>
                <Header />
                  <Switch>
                    <Route exact path='/home' component={MainFile} />
                    {/* The below script is to Follow pass Props */}
                    <Route exact path='/form1' component={()=><Form1 />} />
                    <Route path='/form2' component={Form2} />
                    <Redirect to="/home" />
                </Switch>
               
            </div>
        )
    }
}
