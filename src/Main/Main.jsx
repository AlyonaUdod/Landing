import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Aktuelles from './Aktuelles/Aktuelles';
import Projekte from './Projekte/Projekte';

const Main = () => {
    return (
        <div className='main'>
            <Switch>
                <Route exact path='/' component={Aktuelles}/>
                <Route path='/projekte' component={Projekte}/>
                <Route path='/studierende' component={Projekte}/>}/>
                <Route path='/unternehmen' component={Projekte}/>
                <Route path='/zurPerson' component={Projekte}/>}/>
                <Route path='/abschlussarbeiten' component={Projekte}/>
                <Route path='/kontakt' component={Projekte}/>}/>
            </Switch>
        </div>
    );
};

export default Main;