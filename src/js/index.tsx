import React from 'react'
import ReactDOM from 'react-dom'
// import 'what-input'
// import Button from './components/Button'
import PageNav, { PageNavItem } from './components/PageNav'
import '../css/main.css'

console.log('ACTIVE') // tslint:disable-line:no-console
const root = document.getElementById('root')

if (root) {
  const App = () => (
    <main className="p-8">
      <PageNav active="#1">
        <PageNavItem href="#1">something</PageNavItem>
        <PageNavItem href="#2">something else</PageNavItem>
        <PageNavItem href="#3">a third thing</PageNavItem>
      </PageNav>
    </main>
  )

  ReactDOM.render(<App />, document.getElementById('root'))

  // if (module.hot) {
  //   module.hot.accept('./components/test', function() {
  //     console.log('Accepting the updated module!')
  //   })
  // }
}
