import './global.css';

import styles from './App.module.css';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

// author : {avatar_url: '', name: '', role: ''}
// publishedAt: Data
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        'https://images.unsplash.com/photo-1653631204474-668cac0cb55b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=693&q=80',
      name: 'Viktor Avelino',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Testing text' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        'https://images.unsplash.com/photo-1653631204474-668cac0cb55b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=693&q=80',
      name: 'Diego',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Testing text' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-06-21 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content as any[]}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
