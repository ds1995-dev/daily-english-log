import { Category } from './category';

export type Word = {
    id: number;
    word: string;
    meaning: string;
    sentence: string | null;
    is_learned: boolean;
    category_id: number;
    category: Category;
}