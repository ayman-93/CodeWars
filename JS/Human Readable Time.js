const humanReadable = seconds => {
  const hours = ('0' + Math.trunc(seconds / 3600)).slice(-2);
  const rhours = seconds % 3600;
  const min = ('0' + Math.trunc(rhours / 60)).slice(-2);
  const sec = ('0' + (rhours % 60)).slice(-2);
  return [hours, min, sec].join(':');
};

console.log(humanReadable(3601));

console.log(humanReadable(0), '00:00:00', 'humanReadable(0)');
console.log(humanReadable(5), '00:00:05', 'humanReadable(5)');
console.log(humanReadable(60), '00:01:00', 'humanReadable(60)');
console.log(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
console.log(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
