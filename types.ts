export type UserRole = 'professional' | 'client' | null;

export interface Review {
  id: string;
  clientName: string;
  clientPhoto: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Professional {
  id: string;
  name: string;
  specialties: string[];
  bio: string;
  profilePicture: string;
  rating: number;
  reviewsCount: number;
  monthlyPrice: number;
  weeklyInteractions: number;
  reviews: Review[];
}

export interface ExerciseDetail {
    id: string;
    name: string;
    series: string;
    repetitions: string;
    rest: string;
    observations: string;
    videoUrl?: string;
}

export interface ExercisePlan {
    id: string;
    name: string;
    description: string;
    exercises: ExerciseDetail[];
}

export interface DietPlan {
    id: string;
    name: string;
    description: string;
    meals: Meal[];
}

export interface Meal {
    id: string;
    name: string; // e.g., Café da Manhã
    items: MealItem[];
}

export interface MealItem {
    id: string;
    food: string;
    quantity: string;
    observations?: string;
}

export interface Exercise {
  id: string;
  name: string;
  mediaUrl: string;
  instructions: string[];
  commonErrors: string[];
  primaryMuscles: string[];
  secondaryMuscles: string[];
  muscleGroup: string;
}
