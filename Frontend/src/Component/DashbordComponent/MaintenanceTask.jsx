import React from 'react'
import MaintenanceTaskInputForm from './MaintenanceTaskInputForm'
import MaintenanceTaskOutputForm from './MaintenanceTaskOutputForm'
const MaintenanceTask = ({AddMaintenaceData , AddMaintenace}) => {
  return (
    <div>
        <MaintenanceTaskInputForm AddMaintenaceData={AddMaintenaceData}/>
        <MaintenanceTaskOutputForm AddMaintenace={AddMaintenace}/>
    </div>
  )
}

export default MaintenanceTask