/**
 * Project Euler: Problem 19: Counting Sundays
 * You are given the following information, but you may prefer to do some research for yourself.
 * 1 Jan 1900 was a Monday.
 * Thirty days has September,
 * April, June and November.
 * All the rest have thirty-one,
 * Saving February alone,
 * Which has twenty-eight, rain or shine.
 * And on leap years, twenty-nine.
 * A leap year occurs on any year evenly divisible by 4, but not on a century unless it
 * is divisible by 400.
 * How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
 *
 * */

const isLeapYear = year => {
  //   https://en.wikipedia.org/wiki/Leap_year
  if (year % 4 !== 0) {
    return false;
  }

  if (year % 100 !== 0) {
    return true;
  }

  if (year % 400 !== 0) {
    return false;
  }
  return true;
};

const countingSundays = (firstYear, lastYear) => {
  const maxDays = {
    1: 31,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
  };
  // First sunday after 1900
  let day = 7;
  let month = 1;
  let year = 1900;
  let count = 0;
  while (year <= lastYear) {
    const max = month !== 2 ? maxDays[month] : isLeapYear(year) ? 29 : 28;
    while (day <= max) {
      day += 7;
    }
    day -= max;
    if (month === 12) {
      month = 1;
      year += 1;
    } else {
      month += 1;
    }
    if (year >= firstYear && day === 1) {
      count += 1;
    }
  }
  return count;
};

module.exports = countingSundays;
