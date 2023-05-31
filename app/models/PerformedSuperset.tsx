class PerformedSuperset {
    id: string;
    performedExercises: PerformedExercise[];
    rests: number[]; // in seconds

    constructor(id: string, performedExercises: PerformedExercise[], rests: number[]) {
        this.id = id;
        this.performedExercises = performedExercises;
        this.rests = rests;
    }
}