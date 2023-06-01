const { v4: uuidv4 } = require('uuid');
class Workout {
    id: string;
    name: string;
    supersets: PerformedSuperset[];
    notes: string;
    time: number; // in seconds
    date: number; // unix time

    constructor(id: string, name: string, supersets: PerformedSuperset[], notes: string, time: number, date: number) {
        this.id = id;
        if(id === null || id === undefined || id === ""){
            this.id = this.createId();
        }
        this.name = name;
        this.supersets = supersets;
        this.notes = notes;
        this.time = time;
        this.date = date;
    }
    createId() {
        return uuidv4();
    }
}