import React from 'react'

function ProjectDetails(props) {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project Title - {id}</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quam possimus inventore iusto eaque aliquid cumque, odit, est debitis alias dolorem sequi ea, voluptate a voluptatem? Rem optio voluptatibus perspiciatis.</p>
            </div>
            <div className="card-action gret lighten-4 grey-text">
                <div>Posted by Hamza</div>
                <div>12/12/2018</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails
