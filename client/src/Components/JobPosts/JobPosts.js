import React from 'react';
import { CircularProgress, Grid} from '@material-ui/core';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import useStyles from './styles.js';

const JobPosts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  
  console.log(posts);
  return (
    !posts.length?<CircularProgress/>:(
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {
          posts.map((post)=>(
            <Grid key={post._id}  item xs={12} sm={6} >
              <Post post={post}/>
              <h2>Hello</h2>
              </Grid>
          )
          )
        }
      </Grid>
    ))
  }

export default JobPosts;