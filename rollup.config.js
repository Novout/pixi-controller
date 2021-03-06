import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

const optionsForPackage = [''];
const createPlugins = () => {
  return [typescript(), resolve(), commonjs({ include: /node_modules/ })];
};

const createConfig = () => {
  const list = [];

  optionsForPackage.forEach((option) => {
    list.push({
      input: `./src${option}/index.ts`,
      output: {
        file: `./lib${option}/index.js`,
        format: 'esm',
        exports: 'named',
      },
      plugins: createPlugins(),
    });

    list.push({
      input: `./src${option}/index.ts`,
      output: {
        file: `./lib${option}/index.min.js`,
        format: 'esm',
        exports: 'named',
      },
      plugins: [...createPlugins(), terser()],
    });

    list.push({
      input: `./src${option}/index.ts`,
      output: {
        file: `./lib${option}/index.amd.js`,
        format: 'amd',
        exports: 'named',
      },
      plugins: createPlugins(),
    });

    list.push({
      input: `./src${option}/index.ts`,
      output: {
        file: `./lib${option}/index.amd.min.js`,
        format: 'amd',
        exports: 'named',
      },
      plugins: [...createPlugins(), terser()],
    });
  });

  return list;
};

export default createConfig();
