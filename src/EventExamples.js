import './App.css'
import {Link}  from 'react-router-dom'

function EventExamples (props) {
  return (<div>
      <ul>
          <li><Link to="/event-click">Onlick event</Link></li>
          <li><Link to="/event-hover">Hover event</Link></li>
      </ul>
  </div>);
}

export default EventExamples
