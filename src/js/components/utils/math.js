const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;
const lerp = (a, b, n) => (1 - n) * a + n * b;
const lineEq = (y2, y1, x2, x1, currentVal) => {
    let m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;
    return m * currentVal + b;
};
const clamp = (num, min, max) => num <= min ? min : num >= max ? max : num;
const distance = (x1, y1, x2, y2) => {
    let a = x1 - x2;
    let b = y1 - y2;
    return Math.hypot(a, b);
};
export { map, lerp, lineEq, clamp, distance };
