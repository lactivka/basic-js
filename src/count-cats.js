module.exports = function countCats(matrix) {
  
  let count = 0;

  matrix.map(el => { 
    if(Array.isArray(el)) {
      el.map(elem => {
       if(elem === "^^") count++; 
      })
    }
    if(el === "^^") count++;
  })

  return count;
};
