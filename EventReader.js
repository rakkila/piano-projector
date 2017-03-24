
/**
 * Reading textfile of music events.
 */

class EventReader 
{
    constructor(note, starttime, stoptime, points) 
    {
        this.note = note;
        this.starttime = starttime;
        this.stoptime = stoptime;
        this.points = points;
    }

        toString () {
        return `${this.note} | ${this.starttime}g P :: ${this.stoptime}g C`
    }
}

