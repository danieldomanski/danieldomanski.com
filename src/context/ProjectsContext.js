import React, { useState } from 'react'

export const ProjectsContext = React.createContext()

const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([])

  return (
    <ProjectsContext.Provider value={[projects, setProjects]}>
      {children}
    </ProjectsContext.Provider>
  )
}

export default ProjectsProvider
