import React, { useState } from 'react'

export const ProjectsContext = React.createContext()

const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([])
  const [active, setActive] = useState(0)

  return (
    <ProjectsContext.Provider
      value={[projects, setProjects, active, setActive]}
    >
      {children}
    </ProjectsContext.Provider>
  )
}

export default ProjectsProvider
