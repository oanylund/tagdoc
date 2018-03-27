export const compose2 = (a, b) => c => a(b(c));
export const compose3 = (a, b, c) => d => a(b(c(d)));

export const path = (paths, obj) => {
  let val = obj;
  let idx = 0;
  while (idx < paths.length) {
    if (val == null) {
      return;
    }
    val = val[paths[idx]];
    idx++;
  }
  return val;
};

export const prop = p => obj => obj[p];
