import { HashRouter, NavLink, Route, Routes } from 'react-router-dom'
import { TosHistoryPage } from './pages/TosHistoryPage'
import { TosQuizPage } from './pages/TosQuizPage'
import { TosSplitViewPage } from './pages/TosSplitViewPage'
import './App.css'

function App() {
  return (
    <HashRouter>
      <div className="app-shell">
        <nav className="site-nav" aria-label="Site">
          <NavLink className="site-nav__link" end to="/">
            Terms of Service
          </NavLink>
          <NavLink className="site-nav__link" to="/history">
            Revision history
          </NavLink>
          <NavLink className="site-nav__link" to="/check">
            Check understanding
          </NavLink>
        </nav>
        <main className="app-shell__outlet">
          <Routes>
            <Route path="/" element={<TosSplitViewPage />} />
            <Route path="/history" element={<TosHistoryPage />} />
            <Route path="/check" element={<TosQuizPage />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  )
}

export default App
