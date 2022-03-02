import React from 'react'
import { useParams, Outlet } from 'react-router-dom'

const About = () => {
    let params = useParams();
  return (
    <div>About Component ID: {params.id}
          <Outlet />
    </div>
  )
}

export default About