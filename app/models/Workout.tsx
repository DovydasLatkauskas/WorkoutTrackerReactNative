class Workout {
    id: string;
    name: string;
    supersets: PerformedSuperset[];
    notes: string;
    time: number; // in seconds
    date: number; // unix time

    constructor(id: string, name: string, supersets: PerformedSuperset[], notes: string, time: number, date: number) {
        this.id = id;
        this.name = name;
        this.supersets = supersets;
        this.notes = notes;
        this.time = time;
        this.date = date;
    }
}