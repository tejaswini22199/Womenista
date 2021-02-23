import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import {Typography,Grid,Container} from '@material-ui/core'
import Workform from '../WorkForm/Workform.js'
import Workposts from './Workposts/WorkPosts.js'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Work=()=> {
  const classes = useStyles();
  const works = useSelector((state) => state.works);
  console.log(works);
  return (
    <Container>
      <Grid item xs={12} sm={7}>
     {/* <Workposts/> */}
      </Grid>
      <Grid item xs={12} sm={7}>
      <Workform/>
      </Grid>
    </Container>
    
  );
}
export default Work