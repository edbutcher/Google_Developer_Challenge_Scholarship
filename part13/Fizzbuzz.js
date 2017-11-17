var x = 1;

while (x <= 20) {
    let answer = (x % 3 === 0) && (x % 5 === 0) ? "JuliaJames" : (x % 3 === 0) ? "Julia" : (x % 5 === 0) ? "James" : x;
    console.log(answer);
    x = x + 1;
}
