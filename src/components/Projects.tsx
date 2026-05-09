import type { ReactElement } from "react"
import type { AppState } from "../types"

export const Projects = (props: AppState): ReactElement => {
    const {
        setView
    } = props

    return (
        <section className="projects page">
            <h1>Projects</h1>
        </section>
    )
}