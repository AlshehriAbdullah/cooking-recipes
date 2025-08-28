import { Link } from 'react-router-dom'

//Styles
import './RecipeList.css'

export default function RecipeList( {recipe} ) {
  if (recipe.length === 0) {
    return <div className='error'>No recipes found</div>
  }
  return (
    <div className='recipe-list'>
        {recipe.map(recipe => (
        <div key={recipe.id} className='card'>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
        </div> 
      ))}
    </div>
  )
}  