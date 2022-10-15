import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/douglassantiagos.png',
      name: 'Douglas Santiago',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'}, 
      { type: 'link', content: 'jane.design/doctorcare' },     
    ],
    publishedAt: new Date('2022-10-08 08:53:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Olá 👋', },
      { type: 'paragraph', content: 'Projeto finalizado e mais conhecimento adquirido. Agradeço ao evento da Rocketseat, o NLW. O nome do projeto é Ignite Feed 🚀'}, 
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-10-09 12:20:00')
  },
]

export function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
