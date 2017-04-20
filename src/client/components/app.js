import React from 'react';
import { connect } from 'react-redux';

import { identity as mapStateToProps } from 'ramda'

import Swapper from './swapper'

const App = ({ placeHolder }) =>
  <div>
    { placeHolder }
    <Swapper></Swapper>
  </div>

export default connect(mapStateToProps)(App);
