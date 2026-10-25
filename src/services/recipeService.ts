import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import type { Recipe } from '../interfaces/recipe.interface'


export async function getRecipes(): Promise<Recipe[]> {
    const snapshot = await getDocs(collection(db, 'recipes'))

    return snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
    })) as Recipe[]
}