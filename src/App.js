import './App.css'
import {Link} from 'react-router-dom'

function App (props) {
  return (<div>
      <ul>
          <li><Link to="/event-examples">Events examples</Link></li>
          <li><Link to="/blog">Blog</Link></li>
      </ul>
  </div>);
}

export default App
