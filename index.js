const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  const currentDate = new Date();
  const currentdayOfTheWeek = daysOfWeek[currentDate.getDay()];
  const currentUTCTime = Date.now();
  //
  
  document.getElementById("currentdayOfTheWeek").textContent =
    currentdayOfTheWeek;
  document.getElementById("currentUTCTime").textContent = currentUTCTime;