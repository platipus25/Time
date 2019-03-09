declare class Time {
    hour: number;
    minute: number;
    constructor(hour: number, minute: number);
    static fromDate(date: Date): Time;
    static fromTs(ts: {
        hour: number;
        minute: number;
    }): Time;
    toDate(): Date;
    toString(): string;
    toCompare(): number;
}
export default Time;
