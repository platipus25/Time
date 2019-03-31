
class Time {
    year: number | null;
    month: number | null;
    day: number | null;

    hour:number;
    minute:number;
    second: number;
    constructor(hour: number, minute: number, second: number | undefined = 0, year: number | null = null, month: number | null = null, day: number | null = null){
        // assign to public variables
        this.hour = hour
        this.minute = minute
        this.second = second | 0
        this.year = year
        this.month = month
        this.day = day
        //console.log(`${hour}:${minute}`)
    }

    static fromDate(date: Date){
        // parse date
        return new Time(date.getHours(), date.getMinutes(), date.getSeconds(), date.getFullYear(), date.getMonth(), date.getDate())
    }

    static fromTs(ts: {hour: number, minute: number, second: number | undefined}){
        return new Time(ts.hour, ts.minute, ts.second)
    }

    toDate(date: Date = new Date()){
        // internal date first & internal time only
        let year = this.year? new Date(date.setFullYear(this.year)): date
        let month = this.month? new Date(year.setMonth(this.month)): year
        let day = this.day? new Date(month.setDate(this.day)): month
        let hour = new Date(day.setHours(this.hour))
        let minute = new Date(hour.setMinutes(this.minute))
        let second = new Date(minute.setSeconds(this.second))
        // get new date, set hour, then set minute, then set second
        return second
    }

    toString(){
        let hour = (this.hour > 12? this.hour-12: this.hour) // make 12-hour
        return `${hour}:${this.minute < 10? "0"+this.minute: this.minute}`
    }

    toStringSeconds(){
        return `${this.toString()}:${this.second < 10? "0"+this.second: this.second}`
    }

    toCompare(){
        return (this.hour*100)+this.minute+(this.second*0.01) // concatenate & add zero if neccecary
    }

}

export default Time;