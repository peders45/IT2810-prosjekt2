import React from 'react';
import './ProgressBar.css'

const ProgressBar = (props)  => {
  return (
    <div className="progressbar">
      <Progress percentage={25} />
    </div>
  )
}

const Progress = (props) => {
  return <div className="progress" />
}

export default ProgressBar;
