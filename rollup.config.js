import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'

export default {
  input: './src/index.ts', // 入口文件
  output: [
    {
      format: 'cjs', // 打包为commonjs格式
      file: 'dist/zorroe-utils.cjs.js', // 打包后的文件路径名称
      name: 'zutils', // 打包后的默认导出文件名称
    },
    {
      format: 'esm', // 打包为esm格式
      file: 'dist/zorroe-utils.esm.js',
      name: 'zutils',
    },
    {
      format: 'umd', // 打包为umd通用格式
      file: 'dist/zorroe-utils.umd.js',
      name: 'zutils',
      minifyInternalExports: true,
    },
  ],
  plugins: [typescript({ tsconfig: './tsconfig.json' }), resolve(), commonjs(), terser()],
}
