import { useState } from 'react'
import { Header } from './components/Header.jsx'
import { Sidebar } from './components/Sidebar.jsx'

function App() {

  return (
    <div class="app">
      <Sidebar />
      <div class="main">
        <Header />
        <section class="content">
          <p>Testing</p>
        </section>
        {/* replace with content componnets later */}
      </div>
    </div>
  )
}

export default App
