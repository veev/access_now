import React from 'react';

const StorySection = (props) => {
  const { selectedStory, stories } = props

  console.log(selectedStory)
  console.log(stories)

  // const wrapperClasses = ['info-wrapper']

  // if (infoMode === 'none') { 
  //   wrapperClasses.push('hide')
  // }

  const description = (value) => {
    switch (value) {
      case 'business':
        return <div>
          <p>Business Story Content Here</p>
        </div>;
      case 'healthcare':
        return <div>
          <p>Healthcare Story Content Here</p>
        </div>;
      case 'humanitarian':
        return <div>
          <p>Humanitarian Aid Story Content Here</p>
        </div>;
      case 'education':
        return <div>
          <p>Education Story Content Here</p>
        </div>;
      case 'psychology':
        return <div>
          <p>Psychology Story Content Here</p>
        </div>;
      case 'journalism':
        return <div>
          <p>Journalism Story Content Here</p>
        </div>;
      case 'freedom':
        return <div>
          <p>Freedom of Expression Story Content Here</p>
        </div>;
      default:
        return null;
  }
}

  const incidentsLayer = () => {
    return (
      <div>
        <p>In 2016, there were only 98 Flint Police Officers serving a city of 100,000. That is the smallest number of officers of any comparable city in America. Between the high crime, the lack of jobs and the recent water crisis, the FPD is a department in crisis policing a city in crisis. This map documents one week of calls for service in Flint and the challenge the department faces as it tries to meet the demands of a community on the edge.</p>
      </div>
    )
  }

  const facebookLayer = () => {
    return (
      <div>
        <p>While the FPD scrambles to meet the demand, the community watches in frustration. 100,000 people participate in a Facebook group called Flint Police Operations. The volunteers at FPO document each incident that is broadcast on the police scanner and the followers respond.</p>
      </div>
    )
  }

  const infographicLayer = () => {
    return (
      <div>
        <p>Explore the data behind a day in the Flint Police Department. Each incident called into the Flint Police Dispatch is entered onto a call board that all units can see as they patrol the city. The officers must make tough decisions about which incidents to investigate in person based on the type of incident, the urgency or priority of the call, as well as where they happen to be patrolling.</p>
      </div>
    )
  }

  return (
      <div className='info'>
        
      </div>
  )

}

export default StorySection

