import SideNav from '@components/SideNav';
import '@styles/global.css'
import { Children } from 'react';
import { store } from '../Redux/store'
import { Provider } from 'react-redux'
import ReduxProvider from '@Redux/provider';
export const metadata = {
    title:"Resume Builder",
    description:'Create Your own resume'
}
const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        </head>
        <body className='print:m-0 print:'>
            <div className='main print:hidden '>
                {/* <div className='gradient '>Resume Builder</div> */}
            </div>
            <main className='app print:p-0'>
                {/* <Nav/> */}
                {/* <SideNav handleItemClick={handleItemClick}/> */}
            
<ReduxProvider>
                {children}
                </ReduxProvider>

            </main>
        </body>
    </html>
  )
}

export default RootLayout;