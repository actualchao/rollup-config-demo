import commonjs from 'rollup-plugin-commonjs';
// import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

function myExample1() {
  return {
    name: 'my-example1', // this name will show up in warnings and errors
    resolveId(source) {
      console.log('111 resolve_______________-------------------------------------------');
      return null; // other ids should be handled as usually
    },
    load(id) {
      console.log('111 load_______________-------------------------------------------');
      return null; // other ids should be handled as usually
    }
  };
}
function myExample2() {
  return {
    name: 'my-example1', // this name will show up in warnings and errors
    resolveId(source) {
      console.log('222 resolve_______________-------------------------------------------');
      return null; // other ids should be handled as usually
    },
    load(id) {
      console.log('222 load_______________-------------------------------------------');
      return null; // other ids should be handled as usually
    }
  };
}

/* format:
  cjs: node.js 环境
  iife: 浏览器环境
  umd: 兼容环境, 同时支持 node.js 和浏览器
 */
export default {
  input: 'src/index.js',
  // format: 'umd', // 我们的类库既能被nodejs直接使用，又能在浏览器中使用，那么我们就使用umd的配置项
  output: {
    name: 'amapUpper',
    file: 'dist/amapUpper.js',
    format: 'umd'
  },
  // external: ['@amap/amap-jsapi-loader'],
  plugins: [
    terser(),
    nodeResolve(),
    myExample1(),
    commonjs(),
    // babel({
    //   exclude: '/node_modules/**', // 排除node_modules 下的文件
    //   runtimeHelpers: true
    // }),
    myExample2()
  ]
};
