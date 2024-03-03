const x1: unknown = JSON.parse('1');
const x2 = x1 as number;

const y1 = JSON.parse('1') as unknown;
const y2 = y1 as number

const z1 = (JSON.parse('1') as unknown) as number;

console.log(x1, x2, y1, y2, z1);

