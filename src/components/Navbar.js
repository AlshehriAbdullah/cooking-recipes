// Styles
import { Link } from 'react-router-dom'

import {useTheme} from '../hooks/useTheme'

//styles
import './Navbar.css'

//component 
import SearchBar from './SearchBar'


export default function NavBar() {
  const {color} = useTheme()
  
  return (
    <div className='navbar ' style={{background: color  }}>
        <nav>
            <Link to={'/'} className='brand'>
                <h1> Cooking Recipe </h1>
            </Link>
            <SearchBar />
            <Link to={'/create'}>
               Create Recipe 
            </Link>
        </nav>
    </div>
  )
}  