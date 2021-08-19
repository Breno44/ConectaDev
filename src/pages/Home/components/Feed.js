import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { PostCard } from '../../../components/PostCard/index';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const posts = [
  {
    id: 1,
    author: {
      id: 1,
      name: 'Alex araujo',
      username: 'Alex123',
      avatar: '/images/avatars/avatar_1.jpeg',
    },
    title: 'Criando um app do zero usando react.js',
    date: 'April 7, 2020',
    description: 'fala pessoal qual o framework favorito de vcs?',
    hashtags: '#javascript, #react, #frontend',
    image: '/images/posts/post9.jpeg',
  },
  {
    id: 2,
    author: {
      id: 1,
      name: 'Alex araujo',
      username: 'Alex123',
      avatar: '/images/avatars/avatar_1.jpeg',
    },
    title: 'Comparativo entre react.js e angular.js',
    date: 'April 1, 2020',
    description: 'fala pessoal qual o framework favorito de vcs?',
    hashtags: '#javascript, #react, #frontend, #angular',
    image: '/images/posts/post8.png',
  },
];

export function Feed() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
