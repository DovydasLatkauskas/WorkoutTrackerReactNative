class Workout {
    id: string;
    name: string;
    exercises: Exercise[];
    notes: string;
    time: number; // in seconds

    constructor(id: string, name: string, exercises: Exercise[], notes: string, time: number) {
        this.id = id;
        this.name = name;
        this.exercises = exercises;
        this.notes = notes;
        this.time = time;
    }
}