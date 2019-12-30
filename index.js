const promisify = (item, delay) =>
  new Promise(resolve => setTimeout(() => resolve(item), delay));

const a = () => promisify('a', 3999);
const b = () => promisify('b', 2000);
const c = () => promisify('c', 3001);

async function parallel() {
  const promises = [a(), b(), c()];
  const [out1, out2, out3] = await Promise.all(promises);
  return `parallel is done: ${out1} ${out2} ${out3}`;
}

async function race() {
  const promises = [a(), b(), c()];
  const out1 = await Promise.race(promises);
  return `race is done ${out1};`;
}

async function seq() {
  const out1 = await a();
  const out2 = await b();
  const out3 = await c();
  return `sequence is done: ${out1} ${out2} ${out3}`;
}

seq().then(console.log);
parallel().then(console.log);
race().then(console.log);
