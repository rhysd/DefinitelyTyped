import { Linter, Rule } from "eslint";

export const configs: {
    "flat/recommended": Linter.FlatConfig;
    "flat/recommended-module": Linter.FlatConfig;
    "flat/recommended-script": Linter.FlatConfig;
    "flat/mixed-esm-and-cjs": Linter.FlatConfig;
};

export const rules: Record<string, Rule.RuleModule>;
