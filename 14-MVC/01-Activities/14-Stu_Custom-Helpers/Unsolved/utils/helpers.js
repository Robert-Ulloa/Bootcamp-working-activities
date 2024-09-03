module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  /*
   ? TODO: Create a custom helper 'format_date' that takes in a timestamp,
   ? adds five years to the date, and formats it as M/D/YYYY
  */
 format_date: (exhibition_date)=> {
  const date = new Date(exhibition_date);

  //5 years tot he exhibition date
  date.setFullYear(getFullYear()=+ 5);
  
  // Get month, date and year
  const month = date.getMonth() +1; // becasue they are 0 base
  const day = date.getDate();
  const year = date.getFullYear();

  //format the date as m/d/yyyy
  return `${month}/${day}/${year}`;
 },
};
