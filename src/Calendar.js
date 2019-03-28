class Calendar {
  constructor() {
    const today = new Date();

    this.today = today;
    this.month = today.getMonth();
    this.year = today.getFullYear();
  }
}

export default Calendar;
