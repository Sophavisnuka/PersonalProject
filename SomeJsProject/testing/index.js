function challenge1(width, height) {
  let rectangleString = '';
  // Your code
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      rectangleString += '*';
    }
    if (i < height - 1) {
        rectangleString += '\n'; // Add a newline after each row except the last one
    }
    console.log(rectangleString);
  }
  return rectangleString;
}
challenge1(3, 4)