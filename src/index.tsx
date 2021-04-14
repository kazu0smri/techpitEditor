// React はソースコード内で使用していませんが JSX を使う場合、インポートが必要なので記述が必須
import * as React from 'react'
import { render } from 'react-dom'

const Main = (<h1>Markdown Editor</h1>)

// React と HTML ファイルをつなぐ処理
render(
    Main, 
    document.getElementById('app')
)
