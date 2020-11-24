import React from 'react';
import { Route } from 'react-router-dom';

import Search from './Search';
import Result from './Result';

const SearchIndex = (props) => (
  <>
    <Route exact path={props.match.url + '/'} component={Search} />
    <Route exact path={props.match.url + '/result'} component={Result} />
  </>
);

export default SearchIndex;
