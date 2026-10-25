import { useEffect, useState } from 'react'
import { getRecipes } from '../services/recipeService'
import type { Recipe } from '../interfaces/recipe.interface'

function RecipesPage() {
    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function fetchRecipes() {
            try {
                const fetchedRecipes = await getRecipes()
                setRecipes(fetchedRecipes)
            } catch {
                setError('Could not load recipes.')
            } finally {
                setIsLoading(false)
            }
        }

        fetchRecipes()
    }, [])

    if (isLoading) {
        return <p>Loading recipes...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <main>
            <h1>Recipes</h1>

            {recipes.length === 0 ? (
                <p>No recipes found.</p>
            ) : (
                recipes.map((recipe) => (
                    <article key={recipe.id}>
                        <h2>{recipe.title}</h2>
                        <p>{recipe.description}</p>
                    </article>
                ))
            )}
        </main>
    )
}

export default RecipesPage