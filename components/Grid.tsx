import React from "react";
import {AgGridReact} from '@ag-grid-community/react'
import {AllModules} from '@ag-grid-enterprise/all-modules'

interface GridProps {
}

export const Grid: React.FC<GridProps | React.ComponentProps<typeof AgGridReact>> = (props) => {
  return <div className="ag-theme-alpine" style={{height: 400, width: 600}}><AgGridReact {...props} reactUi modules={AllModules}/></div>
}