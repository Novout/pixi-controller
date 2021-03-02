import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

const optionsForPackage = [''];
const createPlugins = () => {
  return [typescript(), terser()];
};

const createConfig = () => {
  const list = [];

  optionsForPackage.forEach((option) => {
    list.push({
      input: `./src${option}/index.ts`,
      output: {
        file: `./lib${option}/index.js`,
        format: 'umd',
      },
      plugins: createPlugins(),
    });

    list.push({
      input: `./src${option}/index.ts`,
      output: {
        file: `./lib${option}/index.esm.js`,
        format: 'esm',
      },
      plugins: createPlugins(),
    });
  });

  return list;
};

export default createConfig();
