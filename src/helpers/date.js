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
    const hours = formatTime.getHours() < 10 && formatTime.getHours() > 0 ? '0' + formatTime.getHours() : formatTime.getHours();
    const minutes = formatTime.getMinutes() < 10 ? '0' + formatTime.getMinutes() : formatTime.getMinutes();
    formatTime = `${hours}:${minutes}h`;
  }
  return formatTime;
}