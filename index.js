/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

let createEmployeeRecord = function(row) {
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}

let createEmployeeRecords = function(employeeData) {
    return employeeData.map(function(row) {
        return createEmployeeRecord(row)
    })
}

let createTimeInEvent = function(timeStamp) {
    let[date, hour] = timeStamp.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,

    })
    return this
}

let createTimeOutEvent = function(timeStamp) {
    let[date, hour] = timeStamp.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

let wagesEarnedOnDate = function(date){
    let wage = hoursWorkedOnDate.call(this, date)
        * this.payPerHour
        return parseFloat(wage.toString())
}

let hoursWorkedOnDate = function(date) {
    let timeIn = this.timeInEvents.find(function(event) {
        return event.date === date
    })

    let timeOut = this.timeOutEvents.find(function(event) {
        return event.date === date
    })

    return (timeOut.hour - timeIn.hour) / 100
}

let findEmployeeByFirstName = function(array, firstName) {
    return array.find(function(record) {
        return record.firstName === firstName
    })
}


let calculatePayroll = function(arrayRecords) {
    return arrayRecords.reduce(function(memo, record) {
        return memo + allWagesFor.call(record)
    }, 0)
}

