import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    plugins: [
      resolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        skip: ["react", "react-dom"],
      }),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts"],
        compilerOptions: {
          outDir: "./dist/cjs",
          declaration: true,
          declarationDir: "./dist/cjs/types",
        },
      }),
      postcss({ extensions: [".css"], inject: true, extract: false }),
    ],
    external: ["react", "react-dom", "react/jsx-runtime"],
  },
  {
    input: "src/index.ts",
    output: {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
    plugins: [
      resolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        skip: ["react", "react-dom"],
      }),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts"],
        compilerOptions: {
          outDir: "./dist/esm",
          declaration: true,
          declarationDir: "./dist/esm/types",
        },
      }),
      postcss({ extensions: [".css"], inject: true, extract: false }),
    ],
    external: ["react", "react-dom", "react/jsx-runtime"],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
