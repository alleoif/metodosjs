const arr = [1,5,8,7,2,9,];
const valoralto = arr.reduce(function(prev, current) {
    return prev > current ? prev : current;
});
console.log(valoralto);
