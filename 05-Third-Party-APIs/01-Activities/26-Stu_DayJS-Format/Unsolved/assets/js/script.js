// Use Day.js to format the date and assign to the declared variable.

// TODO: 1. What is your graduation date in the following format: Jan 1, 1999?
const gradDate = dayjs('2023-10-15').format('MMM D, YYYY');
$('#1a').text(gradDate);

// TODO: 2. What day of the week will 1/1/2027 be? (e.g. Is it "Monday"?)

const weekDay = dayjs('01-01-2027', 'M-D-YYYY').format('dddd');
$('#2a').text(weekDay);


// TODO: 3. What is the current time in the format: hours:minutes:seconds

const time = dayjs().format('hh:mm:ss');
$('#3a').text(time);

// TODO: 4. What is the current Unix timestamp?

const unix = dayjs().unix();
$('#4a').text(unix);

// TODO: 5. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.

const unixFormat = dayjs.unix(1318781876).format('MMM D, YYYY, hh:mm:ss');
$('#5a').text(unixFormat);

// TODO: 6. What is the difference in days between May 4, 2027 and today? Hint:
// You can display the difference between two dayjs objects by using the dayjs
// diff method.)
const today = dayjs();
const futureDate = dayjs('2027-05-04');
const differenceInDays = futureDate.diff(today, 'day');
$('#6a').text(differenceInDays);

