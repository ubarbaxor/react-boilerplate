import React from 'react'
import { connect } from 'react-redux'
import mapStateToProps from '../selectors/index'

import Placeholder from './placeholder'
import Button from './button'

const App = ({ baz, foo }) => (
  <div>
    <Placeholder value={foo} />
    <Button
      action={console.log}
      label={ baz }/>
  </div>
)

export default connect(mapStateToProps)(App)
