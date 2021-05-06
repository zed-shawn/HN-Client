//const d = new Date(1597001470000).toTimeString(); // 01:01:10 GMTxxxx  GMTxxxxxx more reliable cuz 24 hrs on windows aswell// for time
//const d = new Date(1597001470000).toDateString(); //Mon Aug 10 2020

// internal functions

const breakTime = (milliStr) => {
  const millis = parseInt(milliStr);
  const tRaw = new Date(millis).toTimeString();
  const t = tRaw.split(" ")[0];
  const tSplit = t.split(":");

  const d = new Date(millis).toDateString(); //Mon Aug 10 2020
  const dSplit = d.split(" ");

  const year = dSplit[3];
  const month = dSplit[1];
  const date = dSplit[2];
  const day = dSplit[0];

  const hours = tSplit[0];
  const minutes = tSplit[1];
  const seconds = tSplit[2];

  const returnObj = {
    year,
    month,
    date,
    day,
    hours,
    minutes,
    seconds,
  };
  return returnObj;
};

const dayToMillis = (day) => {
  const millis = day * 86400000 + 1577817000000;
  return breakTime(millis);
};

//console.log(displayTime(1597001470000));

// exposed functions

export const getMillis = () => {
  // Current ms
  const d = new Date().getTime();
  return d;
};

export const getToday = () => {
  return getDayFromMillis(getMillis()).toString();
};

export const getTimeBubble = () => {
  var hours = new Date().getHours(); //To get the Current Hours
  var min = new Date().getMinutes(); //To get the Current Minute
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (min < 10) {
    min = "0" + min;
  }
  return hours + ":" + min;
};

export const getTimeTile = (time, day) => {
  const today = getDayFromMillis(getMillis());
  const diff = today - day;
  if (diff == 0) {
    return time;
  } else if (diff == 1) {
    return "YESTERDAY";
  } else if (diff > 1 && diff <= 365) {
    const breakDay = dayToMillis(day);
    return ` ${breakDay.month} ${breakDay.date} `;
  } else if (diff > 365) {
    const breakDay = dayToMillis(day);
    return ` ${breakDay.month} ${breakDay.date}, ${breakDay.year} `;
  }
};

export const getTimeSeparator = (day) => {
  const today = getDayFromMillis(getMillis());
  const diff = today - day;
  if (diff == 0) {
    return "TODAY";
  } else if (diff == 1) {
    return "YESTERDAY";
  } else if (diff > 1 && diff <= 365) {
    const breakDay = dayToMillis(day);
    return ` ${breakDay.month} ${breakDay.date} `;
  } else if (diff > 365) {
    const breakDay = dayToMillis(day);
    return ` ${breakDay.month} ${breakDay.date}, ${breakDay.year} `;
  }
};

export const getDayFromMillis = (milli) => {
  const diffInMilli = milli - 1577817000000; //1577817000000 is 00:00:00 01/01/2020
  const diffInDays = Math.floor(diffInMilli / 86400000);
  return diffInDays;
};

export const getTimeBubbleFromMillis = (millis) => {
  const brokenTime = breakTime(millis);
  var hours = brokenTime.hours;
  var min = brokenTime.minutes;
  /* if (hours < 10) {
      hours = "0" + hours;
    }
    if (min < 10) {
      min = "0" + min;
    } */
  return hours + ":" + min;
};

export const getTimeTileFromMillis = (millis) => {
  const day = getDayFromMillis(millis);
  const time = getTimeBubbleFromMillis(millis);

  const today = getDayFromMillis(getMillis());
  const diff = today - day;
  if (diff == 0) {
    return time;
  } else if (diff == 1) {
    return "Yesterday";
  } else if (diff > 1 && diff <= 365) {
    const breakDay = dayToMillis(day);
    return ` ${breakDay.month} ${breakDay.date} `;
  } else if (diff > 365) {
    const breakDay = dayToMillis(day);
    return ` ${breakDay.month} ${breakDay.date}, ${breakDay.year} `;
  }
};
