import '../styles/globals.css'
import { FC } from 'react'

interface IRootLayout {
  children: any
}

const RootLayout: FC<IRootLayout> = ({ children }) => (
  <html lang='en'>
    <head>
      <link rel='preconnect' href='https://stijndv.com' />
      <link rel='stylesheet' href='https://stijndv.com/fonts/Eudoxus-Sans.css' />
    </head>
    <body>{children}</body>
  </html>
)

export default RootLayout
