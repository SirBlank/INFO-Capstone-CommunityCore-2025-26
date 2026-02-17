import { useState } from 'react'
import { Header } from './components/Header.jsx'

function App() {

  return (
    <div class="app">
      <aside class="sidebar">
        <div className="logo">
          <div>⚪</div>
        </div>
        <nav>
          <a class="nav-item active">Programs</a>
          <a class="nav-item">Users</a>
          <a class="nav-item">Settings</a>
        </nav>
      </aside>

      <div class="main">
        <header class="header">
          ISCHOOL MENTORSHIP PROGRAM TRACKER
        </header>

        <section class="content">
          <p>Testing</p>
        </section>
      </div>
    </div>
  )
}

export default App
