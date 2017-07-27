import React from 'react'
import { connect } from 'react-redux'
import mapStateToProps from '../selectors/placeholder'

import Button from '../components/button'
import Placeholder from '../components/placeholder'
import Video from '../components/video'

const App = ({ baz, foo }) => (
  <div>
    <Placeholder value={foo} />
    <Button
      action={console.log}
      label='Baz me up, grand foo' />
    <Video
      src='http://media.istockphoto.com/videos/loopable-program-code-blue-and-white-video-id158328599'
      autoplay
    />
  </div>
)

export default connect(mapStateToProps)(App)
