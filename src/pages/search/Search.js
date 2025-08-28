import { useFetch } from '../../hooks/useFetch'
import { useLocation } from 'react-router-dom'
import RecipeList from '../../components/RecipeList'
import { useMemo } from 'react' // Add this import

// styles
import './Search.css'

export default function Search() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const url = 'http://localhost:3000/recipes'
  const { error, isPending, data } = useFetch(url)

  // Filter recipes based on search query
  const filteredRecipes = useMemo(() => {
    if (!data || !query) return data
    
    return data.filter(recipe => 
      recipe.title.toLowerCase().includes(query.toLowerCase()) ||
      recipe.ingredients.some(ingredient => 
        ingredient.toLowerCase().includes(query.toLowerCase())
      )
    )
  }, [data, query])

  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {filteredRecipes && <RecipeList recipe={filteredRecipes} />}
    </div>
  )
}