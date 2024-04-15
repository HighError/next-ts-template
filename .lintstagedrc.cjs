module.exports = {
  "*.{ts,tsx}": () => "tsc --noEmit",
  "*.{js,ts,cjs,mjs,d.cts,d.mts,jsx,tsx,json,jsonc}": [
    "biome check --files-ignore-unknown=true", // Check formatting and lint
    "biome check --apply --no-errors-on-unmatched", // Format, sort imports, lint, and apply safe fixes
    "biome check --apply --organize-imports-enabled=false --no-errors-on-unmatched", // format and apply safe fixes
    "biome check --apply-unsafe --no-errors-on-unmatched", // Format, sort imports, lints, apply safe/unsafe fixes
    "biome format --write --no-errors-on-unmatched", // Format
    "biome lint --apply --no-errors-on-unmatched", // Lint and apply safe fixes
  ],
  "*": [
    "biome check --no-errors-on-unmatched --files-ignore-unknown=true", // Check formatting and lint
  ],
};
