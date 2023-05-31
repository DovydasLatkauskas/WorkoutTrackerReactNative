class PerformedExercise {
    id: string;
    exerciseTemplateId: string;
    sets: ExerciseSet[];

    constructor(id: string, exerciseTemplateId: string, sets: ExerciseSet[]) {
        this.id = id;
        this.exerciseTemplateId = exerciseTemplateId;
        this.sets = sets;
    }
}