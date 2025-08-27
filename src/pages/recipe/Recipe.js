// Style
import './Recipe.css'

import { useFetch } from '../../hooks/useFetch'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

export default function Recipe() {
  const {id} = useParams()
  const url = 'http://localhost:3000/recipes/' + id
  const {data: recipe, isPending, error} = useFetch(url)
  const history = useNavigate()

  useEffect(() => {
    if (error){
      setTimeout(() => {
        history('/')
      }, 2000)
    }
  }, [error, history])

  return (
    <div>
        {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
        {recipe && (
          <div>
            <h2>{recipe.title}</h2>
            <p>{recipe.cookingTime} To cook</p>
            <p>{recipe.ingredients}</p>
            <p>{recipe.method}</p>
          </div>
        )}
    </div>
  )
} 