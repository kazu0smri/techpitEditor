const path = require('path')

module.exports = {
//   最初に読み込むファイルを指定する
entry: './src/index.tsx',
// ts-loader（TypeScript の変換）の対象
module: {
  rules: [
    {
      test: /\.tsx$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
  ],
},
resolve: {
    // 外部ファイルやライブラリ（node_modules 以下のファイル）を使うファイルの拡張子なので .tsx と .js の両方を指定
    extensions: ['.js', '.ts', '.tsx'],
},
//   出力するファイルの設定
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    // 相対パスのリソースへ自動的に dist/ を追加してくれます
    publicPath: 'dist/',
  }
}