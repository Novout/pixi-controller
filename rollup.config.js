import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import babel from 'rollup-plugin-babel';
import dts from 'rollup-plugin-dts';
import pkg from './package.json';

const optionsForCompile = ['esm', 'cjs', 'iife'];

const createPlugins = () => {
  return [typescript(), json(), resolve(), commonjs(), babel({ exclude: 'node_modules/**' })];
};

const banner = [
  `/*!`,
  ` * ${pkg.name} - v${pkg.version}`,
  ` *`,
  ` * ${pkg.name} is licensed under the MIT License.`,
  ` * http://www.opensource.org/licenses/mit-license`,
  ` */`,
].join('\n');

const createConfig = () => {
  const list = [];

  optionsForCompile.forEach((format) => {
    list.push({
      input: `./src/index.ts`,
      output: {
        file: `./lib/index.${format}.js`,
        format,
        exports: 'named',
        banner,
        sourcemap: true,
        name: '_pixi_controller',
      },
      plugins: [...createPlugins()],
    });
  });

  list.push({
    input: 'src/index.ts',
    output: {
      file: 'lib/index.d.ts',
      format: 'es',
    },
    plugins: [dts()],
  });

  return list;
};

export default createConfig();
