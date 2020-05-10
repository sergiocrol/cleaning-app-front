export const getDate = (date) => {
  let formatDate = 'no date';
  if (date !== undefined) {
    formatDate = new Date(date);
    formatDate = `${formatDate.getFullYear()}/${formatDate.getMonth() + 1}/${formatDate.getDate()}`;
  }
  return formatDate;
}

export const getTime = (date) => {
  let formatTime = 'no time';
  if (date !== undefined) {
    formatTime = new Date(date);
    formatTime = `${formatTime.getHours()}:${formatTime.getMinutes()}h`;
  }
  return formatTime;
}