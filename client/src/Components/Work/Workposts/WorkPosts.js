import react,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import {Grid,CircularProgress} from '@material-ui/core'
import useStyles from './styles.js'
import Eachitem from '../Work/Eachitem.js'
const Workposts=()=>{
     const workposts= useSelector(state => state.workposts);
     console.log(workposts);
     const classes=useStyles();
     return(
         !workposts.length?<CircularProgress/>:
         (
             <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                 {
                  workposts.map((post)=>(
                      <Grid key={post._id} item sm={6} xs={6}>
                        <Eachitem item={post}/>
                      </Grid>
                  ) )
}
             </Grid>
         )
     )
}
export default Workposts;