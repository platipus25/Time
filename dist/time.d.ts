declare class Time {
    year: number | null;
    month: number | null;
    day: number | null;
    hour: number;
    minute: number;
    second: number;
    constructor(hour: number, minute: number, second?: number | undefined, year?: number | null, month?: number | null, day?: number | null);
    static fromDate(date: Date): Time;
    static fromTs(ts: {
        hour: number;
        minute: number;
        second: number | undefined;
    }): Time;
    setDate(date: Date): Time;
    toDate(now?: Date): Date;
    toString(): string;
    toStringSeconds(): string;
    toMs(date?: Date): number;
}
export default Time;
