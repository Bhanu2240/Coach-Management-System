import React from 'react'
import CoachProfile from '../Component/DashbordComponent/CoachProfile'
const Dashbord = ({CountCoachData , AddCoachData , AddCoach}) => {
  return (
    <div>
      <CoachProfile AddCoachData={AddCoachData} AddCoach={AddCoach} CountCoachData={CountCoachData}/>
    </div>
  )
}

export default Dashbord