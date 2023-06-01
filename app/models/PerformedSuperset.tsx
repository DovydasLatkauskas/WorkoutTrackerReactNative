class PerformedSuperset {
    performedExercises: PerformedExercise[];
    rests: number[]; // in seconds

    constructor(performedExercises: PerformedExercise[], rests: number[]) {
        this.performedExercises = performedExercises;
        this.rests = rests;
    }
}