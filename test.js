/** @type {unknown} */
const x1 = JSON.parse('1');
const x2 = /** @type {number} */ (x1);

const y1 = /** @type {unknown} */ (JSON.parse('1'));
const y2 = /** @type {number} */ (y1);

const z1 = /** @type {number} */ (/** @type {unknown} */ (JSON.parse('1')));

console.log(x1, x2, y1, y2, z1);
