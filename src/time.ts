
class Time {
    hour:number;
    minute:number;
    second: number;
    constructor(hour: number, minute: number, second: number | undefined = 0){
        // assign to public variables
        this.hour = hour
        this.minute = minute
        this.second = second | 0
        //console.log(`${hour}:${minute}`)
    }

    static fromDate(date: Date){
        // parse date
        return new Time(date.getHours(), date.getMinutes(), date.getSeconds())
    }

    static fromTs(ts: {hour: number, minute: number, second: number | undefined}){
        return new Time(ts.hour, ts.minute, ts.second)
    }

    toDate(date: Date = new Date()){
        // get new date, set hour, then sed minute
        return new Date(new Date(new Date((date).setHours(this.hour)).setMinutes(this.minute)).setSeconds(this.second))
    }

    toString(){
        let hour = (this.hour > 12? this.hour-12: this.hour) // make 12-hour
        return `${hour}:${this.minute < 10? "0"+this.minute: this.minute}:${this.second < 10? "0"+this.second: this.second}`
    }

    toCompare(){
        return (this.hour*100)+this.minute+(this.second*0.01) // concatenate & add zero if neccecary
    }

}

export default Time;