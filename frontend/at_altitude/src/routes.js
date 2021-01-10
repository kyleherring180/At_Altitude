import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Basic from './components/pages/Basic';
import Premium from './components/pages/Premium';
import BlogList from './containers/BlogListView';
import BlogDetail from './containers/BlogDetailView';


const BaseRouter = () => (
    <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/basic" component={Basic} />
          <Route path="/premium" component={Premium} />
          <Route exact path="/blog" component={BlogList} />
          <Route path="/blog/:postID" component={BlogDetail} />
        </Switch>
    </div>
);

export default BaseRouter;