export function isEvenMinute() {
    const currentMinute = new Date().getMinutes();
    return currentMinute % 2 === 0;
  }