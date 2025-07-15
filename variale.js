console.time("timer");
console.log("Hello this is varibale var");
//console.error("hello this is variable var");
//console.warn("hello this is variable var ");
console.log({saba: "me",marks:34});
console.table({saba: "me",marks:34});
for (let i = 0; i < 100000; i++) {
  // Simulate some work
  let sum = i + 1;
}
console.timeEnd("this is told about how many time to take run these code ");
console.time("loopPerformance"); // Start the timer

for (let i = 0; i < 100000; i++) {
  // Simulate some work
  let sum = i + 1;
}

console.timeEnd("loopPerformance"); // Stop the timer and log the result
console.time("timerhfjb");

for (let i = 0; i < 1000; i++) {
  // Simulate some work
  let sum = i + 1;
}
console.timeEnd("this is told about how many time to take run these code ");