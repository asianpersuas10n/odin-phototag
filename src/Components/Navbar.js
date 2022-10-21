import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar">
            <Link to='/' id='homeButton'>Back to Start</Link>
        </div>
    )
}

export default Navbar