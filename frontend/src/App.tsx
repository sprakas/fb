import React, { lazy } from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './stubs/header';
const AllNotes = lazy(() => import('./components/notes/AllNotes'));
const NewNote = lazy(() => import('./components/notes/NewNote'));
const EditNote = lazy(() => import('./components/notes/EditNote'));
const Login = lazy(() => import('./components/authentication/login'));
const Registration = lazy( () => import('./components/authentication/registration'));

const AuthRoute = (props) => {
  const token = localStorage.getItem('token');
  if (token) {
    return <Route {...props} />;
  }
  return <Redirect to='/' />;
};

const App = () => {
    return (
      <Router>
        <div>
          <Header/>
          <Switch>
          <React.Suspense fallback={<div>Loading</div>}>
            <Route path='/' exact component={Login}/>
            <Route path='/register'  component={Registration}/>
            <AuthRoute path='/all_notes' component={AllNotes}/>
            <AuthRoute path='/new_note' component={NewNote}/>
            <AuthRoute path='/note/:id' component={EditNote}/>
          </React.Suspense>
          </Switch>
        </div>
      </Router>
    );
};
export default App;
