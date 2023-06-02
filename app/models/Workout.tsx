import PerformedSuperset from "./PerformedSuperset";

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

    getDateString(){
        return new Date(this.date).toLocaleDateString();
    }

    static compareByDate(a: Workout, b: Workout){
        return (a.date > b.date) ? 1 : (b.date > a.date)? -1 : 0;
    }
}
export default Workout;