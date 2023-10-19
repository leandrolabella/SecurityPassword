import { Outlet, Link } from "react-router-dom";
import './components/Header.css';

function App() {
    return (
        <div>
            <header>
                <div className='header-container'>
                    <Link to='/' className='span-checked'>PASSWORD GENERATOR</Link>
                    <Link to='/testPassword' className='span-no-checked'>PASSWORD CHECK</Link>
                </div>
            </header>
            <Outlet />
        </div>
    );
}

export default App