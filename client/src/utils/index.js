export const orderBy = (data, type) => {
  data.sort((a, b) => {
    if (a.price < b.price) return -1
    return true
  });
  return data;
}

export const captalize = (value) => {
  if (!value) return '';

  return value.toLowerCase().split(' ').map((item) => {
    return item.toString().charAt(0).toUpperCase() + item.toString().slice(1);
  }).join(' ');
}