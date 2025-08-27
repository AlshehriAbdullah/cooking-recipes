import { useFetch } from '../../hooks/useFetch'

// Style
import './Home.css'

// components
import RecipeList from '../../components/RecipeList'


export default function Home() {
  const {data, isPending, error} = useFetch('http://localhost:3000/recipes')
  
  return (
    <div className='home'>
      {isPending && <p className='loading'>Loading...</p>}
      {error && <p className='error'>{error}</p>}
      {data && <RecipeList  recipe={data}/>}

    </div>
  )
} 