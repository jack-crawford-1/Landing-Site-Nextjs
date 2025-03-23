// function GetRandomColour() {
//   const letters = '0123456789ABCDEF'
//   let colour = '#'
//   for (let i = 0; i < 6; i++) {
//     colour += letters[Math.floor(Math.random() * 16)]
//   }
//   return colour
// }

// export default GetRandomColour

export function GetRandomColour() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 50) + 200;
  const lightness = Math.floor(Math.random() * 40) + 20;

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
