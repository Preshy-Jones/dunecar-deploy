let count = 75;
// const basePath = "/assets/360";
//make array from 1 to count
const basePath = "https://fastly-production.24c.in/webin/360";
const arr = Array.from(Array(count).keys());

console.log(arr);

const images = arr.map((image) => `${basePath}/output_${image}.jpeg`);

console.log(images);
