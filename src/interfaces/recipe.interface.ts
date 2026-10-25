export interface Recipe {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    preparationTime: number;
    ingredients?: string[];
    steps?: string[];
    category: string;
    difficultyLevel: 'easy' | 'medium' | 'hard';
}