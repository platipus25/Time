// A simple time of day class Ravago Jones 3/7/19 V1.1
var Time = /** @class */ (function () {
    function Time(hour, minute) {
        // assign to public variables
        this.hour = hour;
        this.minute = minute;
        //console.log(`${hour}:${minute}`)
    }
    Time.fromDate = function (date) {
        // parse date
        return new Time(date.getHours(), date.getMinutes());
    };
    Time.fromTs = function (ts) {
        return new Time(ts.hour, ts.minute);
    };
    Time.prototype.toDate = function () {
        // get new date, set hour, then sed minute
        return new Date(new Date((new Date()).setHours(this.hour)).setMinutes(this.minute));
    };
    Time.prototype.toString = function () {
        var hour = (this.hour > 12 ? this.hour - 12 : this.hour); // make 12-hour
        return hour + ":" + this.minute;
    };
    Time.prototype.toCompare = function () {
        return (this.hour * 100) + this.minute; // concatenate & add zero if neccecary
    };
    return Time;
}());
export default Time;
