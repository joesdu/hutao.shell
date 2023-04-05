import type { Configuration } from 'webpack';
import path from 'path';
import { plugins } from './webpack.plugins';
import { rules } from './webpack.rules';

rules.push({
  test: /\.(less|css)$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'less-loader' }]
});

export const rendererConfig: Configuration = {
  devtool: 'inline-source-map',
  devServer: {
    hot: true
  },
  module: {
    rules
  },
  plugins,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.less']
  }
};
