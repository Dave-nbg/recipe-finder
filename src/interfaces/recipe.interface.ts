export interface Recipe {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    preparationTime: number;
    ingredients: string[];
    steps: string[];
    category: string;
    difficultyLevel: 'easy' | 'medium' | 'hard';
}