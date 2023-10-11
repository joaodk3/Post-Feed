import { Header } from './components/header'
import { Post } from './components/post'
import { Sidebar } from './components/sidebar'
import './global.css' 
import styles from './App.module.css'


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
          <Sidebar />
        
        <main>
          <Post author="Joao Santos"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid" 
          />
        
        </main>
      </div>
    </div>
  )
};
