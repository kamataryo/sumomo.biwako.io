import React            from 'react'
import ReactDOM         from 'react-dom'
import { AppContainer as HMRContainer } from 'react-hot-loader'
import App              from './components/App'


/**
 * render React App
 * @param  {ReactComponent} Component React Component
 * @return {void}
 */
const render = Component =>
  ReactDOM.render(
    <HMRContainer>
      <Component />
    </HMRContainer>,
    document.getElementById('app')
  )

render(App)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default
    render(NextApp)
  })
}
