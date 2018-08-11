export const stars = (n) => {
  var star, floor=[];
  for(var i=0; i<n; i++){
    star = "*".repeat(i+1);
    floor.push(star);
  } 
  return floor;
}