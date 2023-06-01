class PerformedExercise {
    exerciseTemplateId: string;
    sets: ExerciseSet[];

    constructor(exerciseTemplateId: string, sets: ExerciseSet[]) {
        this.exerciseTemplateId = exerciseTemplateId;
        this.sets = sets;
    }
}