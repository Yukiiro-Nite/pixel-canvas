import type { ReactElement } from "react"
import type { AppState } from "../types"

export const Project = (props: AppState): ReactElement => {
    const {
        setView
    } = props

    return (
        <section className="project page">
            <h1>Project</h1>
        </section>
    )
}