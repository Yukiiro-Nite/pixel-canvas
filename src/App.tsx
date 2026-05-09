import { useCallback, useState, type ReactElement } from 'react'
import { Projects } from './components/Projects'
import { Project } from './components/Project'
import './App.css'
import type { AppState } from './types'

const views = {
  "projects": Projects,
  "project": Project
} as Record<string, (props: AppState) => ReactElement>

function App() {
  const [viewState, setViewState] = useState("projects")
  const view = views[viewState]

  const setView = useCallback((view: string) => {
    setViewState(view)
  }, [setViewState])

  return view({
    setView
  })
}

export default App
