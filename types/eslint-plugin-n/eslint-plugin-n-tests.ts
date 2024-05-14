import type { Linter, Rule } from "eslint";
import { configs, rules } from "eslint-plugin-n";

const recommended: Linter.FlatConfig = configs["flat/recommended"];
const recommendedScript: Linter.FlatConfig = configs["flat/recommended-script"];
const recommendedModule: Linter.FlatConfig = configs["flat/recommended-module"];
const mixedEsmAndCjs: Linter.FlatConfig = configs["flat/mixed-esm-and-cjs"];
const rule: Rule.RuleModule = rules["exports-style"];
