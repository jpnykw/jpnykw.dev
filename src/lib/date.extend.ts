export {}

interface DateObject {
  year: number
  month: number
  date: number
}

declare global {
  interface Date {
    calcAge(dob: DateObject): number
  }
}

Date.prototype.calcAge = function(dob: DateObject) {
  const year = this.getFullYear()
  const month = this.getMonth() + 1
  const date = this.getDate()
  return (year - dob.year) - (month == dob.month ? (date < dob.date ? 1 : 0) : month < dob.month ? 1 : 0)
}

