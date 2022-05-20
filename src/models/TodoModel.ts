export class TodoModel {
  constructor(
    public text: string,
    public date: TodoDate,
    public status: boolean,
    public id: number
  ) {
    this.text = text;
    this.date = date;
    this.status = status;
    this.id = id;
  }
}
export class TodoDate {
  constructor(
    public year: string,
    public month: string,
    public date: string,
    public day: string,
    public hour: string,
    public minute: string,
    public second: string
  ) {
    this.year = year;
    this.month = this.formatMonth(parseInt(month));
    this.date = date;
    this.day = this.formatDate(parseInt(day));
    this.hour = this.minimumIntegers(hour);
    this.minute = this.minimumIntegers(minute);
    this.second = this.minimumIntegers(second);
  }
  formatDate(e: number) {
    const weekday = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    return weekday[e - 1];
  }
  formatMonth(e: number) {
    const month = [
      "January",
      "February",
      "Mars",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return month[e - 1];
  }
  minimumIntegers(e: string) {
    return e.length > 1 ? e : "0" + e;
  }
}
