export type Word = {
    id: number;
    word: string;
    meaning: string;
    sentence: string | null;
    is_learned: boolean;
}