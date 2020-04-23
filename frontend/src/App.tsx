import React, { lazy } from 'react';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
const AllNotes = lazy(() => import('./components/notes/AllNotes'));
const NewNote = lazy(() => import('./components/notes/NewNote'));
const EditNote = lazy(() => import('./components/notes/EditNote'));

const App = () => {
    return (
      <Router>
        <div>
          <nav className='navbar App-header' role='navigation' aria-label='main navigation'>
            <p>{process.env.NODE_ENV}</p>
            <div className='navbar-brand'>
              <Link to='/' className='navbar-item'>
                NotesQL
              </Link>
            </div>
          <div className='navbar-end'>
              <Link to='/' className='navbar-item'>
                All Notes
              </Link>
          <Link to='/newnote' className='navbar-item'>
                New Note
              </Link>
            </div>
          </nav>
          <Switch>
          <React.Suspense fallback={<div>Loading</div>}>
            <Route path='/' exact component={AllNotes}/>
            <Route path='/newnote' component={NewNote}/>
            <Route path='/note/:id' component={EditNote}/>
          </React.Suspense>
          </Switch>
        </div>
      </Router>
    );
};
export default App;
