import esbuild from 'rollup-plugin-esbuild';

const packageJson = require('./package.json');

const bundle = (config) => ({
  ...config,
  input: packageJson.source,
  external: (id) => !/^[./]/.test(id),
});

export default [
  bundle({
    plugins: [esbuild()],
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'es',
        sourcemap: true,
      },
    ],
  }),
];
