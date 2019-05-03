var Time = /** @class */ (function () {
    function Time(hour, minute, second, year, month, day) {
        if (second === void 0) { second = 0; }
        if (year === void 0) { year = null; }
        if (month === void 0) { month = null; }
        if (day === void 0) { day = null; }
        // assign to public variables
        this.hour = hour;
        this.minute = minute;
        this.second = second | 0;
        this.year = year;
        this.month = month;
        this.day = day;
        //console.log(`${hour}:${minute}`)
    }
    Time.fromDate = function (date) {
        // parse date
        return new Time(date.getHours(), date.getMinutes(), date.getSeconds(), date.getFullYear(), date.getMonth(), date.getDate());
    };
    Time.fromTs = function (ts) {
        return new Time(ts.hour, ts.minute, ts.second);
    };
    Time.prototype.setDate = function (date) {
        return new Time(this.hour, this.minute, this.second, date.getFullYear(), date.getMonth(), date.getDate());
    };
    Time.prototype.toDate = function (date) {
        if (date === void 0) { date = new Date(); }
        // internal date first & internal time only
        var year = this.year ? new Date(date.setFullYear(this.year)) : date;
        var month = this.month ? new Date(year.setMonth(this.month)) : year;
        var day = this.day ? new Date(month.setDate(this.day)) : month;
        var hour = new Date(day.setHours(this.hour));
        var minute = new Date(hour.setMinutes(this.minute));
        var second = new Date(minute.setSeconds(this.second));
        // get new date, set hour, then set minute, then set second
        return second;
    };
    Time.prototype.toString = function () {
        var hour = (this.hour > 12 ? this.hour - 12 : this.hour); // make 12-hour
        return hour + ":" + (this.minute < 10 ? "0" + this.minute : this.minute);
    };
    Time.prototype.toStringSeconds = function () {
        return this.toString() + ":" + (this.second < 10 ? "0" + this.second : this.second);
    };
    Time.prototype.toCompare = function () {
        return (this.hour * 100) + this.minute + (this.second * 0.01); // concatenate & add zero if neccecary
    };
    return Time;
}());
export default Time;
