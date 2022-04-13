module.exports = async (input) => {
  const latinLetter = 'монеточкаaekmhot4';
  const formatted = input
    .toLowerCase()
    .replace(/[^а-яa-z]/g, '')
    .split('')
    .sort();

  const result = formatted.filter((e) => {
    const reg = new RegExp(`${e}`, 'g');
    return reg.test(latinLetter);
  });

  const percent = result.length / (9 / 100);

  return percent > 70
};
