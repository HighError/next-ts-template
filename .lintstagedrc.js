module.exports = {
  '*.{js,ts,jsx,tsx,mjs}': 'eslint -f mo --fix',
  '*.{ts,tsx}': () => 'tsc --noEmit',
  '*.{json,md,css}': 'prettier --write',
};
