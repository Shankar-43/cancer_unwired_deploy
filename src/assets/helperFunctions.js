const formatDate = dateStr => {
  const date = new Date(dateStr);

  // Format date and time components
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  // Get the time zone offset in minutes
  const timeZoneOffset = date.getTimezoneOffset();

  // Calculate the time zone offset in hours and minutes
  const timeZoneOffsetHours = Math.floor(Math.abs(timeZoneOffset) / 60);
  const timeZoneOffsetMinutes = Math.abs(timeZoneOffset) % 60;

  // Determine the sign of the time zone offset
  const timeZoneOffsetSign = timeZoneOffset <= 0 ? '+' : '-';

  // Format the time zone offset string
  const timeZoneOffsetStr = `${timeZoneOffsetSign}${timeZoneOffsetHours
    .toString()
    .padStart(2, '0')}:${timeZoneOffsetMinutes.toString().padStart(2, '0')}`;

  const dateTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${timeZoneOffsetStr}`;
  const timeZone = `(GMT${timeZoneOffsetStr})`;

  return { dateTime, timeZone };
};

export default formatDate;
