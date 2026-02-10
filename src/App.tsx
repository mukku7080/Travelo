import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes/route.config'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

        <Routes>
          {routes.map((route, i) =>
            route.children ? (
              <Route key={i} path={route.path} element={route.element}>
                {route.children.map((child, j) => (
                  <Route
                    key={j}
                    path={child.path}
                    element={child.element}
                  />
                ))}
              </Route>
            ) : (
              <Route key={i} path={route.path} element={route.element} />
            )
          )}
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
