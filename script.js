document.addEventListener('DOMContentLoaded', function () {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // 1. Get the value of the 'count' cookie
  let count = getCookie('count');

  // 2 & 3. If the cookie exists, increment; otherwise, initialize to 1
  if (count) {
    count = parseInt(count) + 1;
  } else {
    count = 1;
  }

  // 4. Update the cookie with the new count value
  setCookie('count', count, 30); // Cookie expires in 30 days

  // 5. Display the count on the webpage
  const countDisplay = document.createElement('div');
  countDisplay.textContent = `You have visited this page ${count} time(s).`;
  document.body.appendChild(countDisplay);
});
