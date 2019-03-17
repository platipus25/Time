
class Time {
    hour:number;
    minute:number;
    constructor(hour: number, minute: number){
        // assign to public variables
        this.hour = hour
        this.minute = minute
        //console.log(`${hour}:${minute}`)
    }

    static fromDate(date: Date){
        // parse date
        return new Time(date.getHours(), date.getMinutes())
    }

    static fromTs(ts: {hour: number, minute: number}){
        return new Time(ts.hour, ts.minute)
    }

    toDate(date: Date = new Date()){
        // get new date, set hour, then sed minute
        return new Date(new Date((date).setHours(this.hour)).setMinutes(this.minute))
    }

    toString(){
        let hour = (this.hour > 12? this.hour-12: this.hour) // make 12-hour
        return `${hour}:${this.minute < 10? "0"+this.minute: this.minute}`
    }

    toCompare(){
        return (this.hour*100)+this.minute // concatenate & add zero if neccecary
    }

}

export default Time;