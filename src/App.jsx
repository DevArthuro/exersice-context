import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LayoutComponent from './pages/LayoutComponent'
import HeaderComponent from './components/container/HeaderComponent'
import Articles from './components/container/Articles'
import ArticlesProvider from './context/ArticlesContext'

function App() {
  return (
    <div>
      <ArticlesProvider>
          <HeaderComponent/>
        <LayoutComponent>
          <Articles/>
        </LayoutComponent>
      </ArticlesProvider>
    </div>
  )
}

export default App
