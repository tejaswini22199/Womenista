import './App.css';
import { Container, AppBar, Typography, Grow, Grid,Button } from '@material-ui/core';
import Form from './Components/Form/Form.js'
import  {getPosts} from './Actions/getPosts.js';
import JobPosts from './Components/JobPosts/JobPosts.js'
import useStyles from './Styles.js'
import react,{useEffect,useState} from 'react'
import Work from './Components/Work/Work.js'
import { useDispatch } from 'react-redux';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';
const App=()=> {
  // const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    dispatch(getPosts());
  }, [ dispatch]);

  return (
    <BrowserRouter>
    <Container maxWidth="lg">
     <AppBar className={classes.appBar} position="static" color="inherit">
     <Container>
     <Grid  container justify="space-between"  alignItems="stretch" spacing={2}> 
     <Grid item >
       <Typography className={classes.heading} variant="h2" align="center">Welcome to Womenista</Typography>
       </Grid>
       <Grid item >
       <Button className={classes.buttonSubmit} variant="contained"  color="primary" size="large" type="submit" ><Link className={classes.textC} to="/jobposts">ViewJobs</Link></Button>
       </Grid>
       <Grid item >
       <Button className={classes.buttonSubmit} variant="contained"  color="secondary" size="large" type="submit" > <Link className={classes.textC} to="/work">ViewWork</Link></Button>
       </Grid>
     </Grid>
    </Container>
     </AppBar>
     <Switch>
        <Route exact path="/">
          <Grow in>
            <Container>
              <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                  <Form />
              </Grid>
            </Container>
          </Grow>
          </Route>
          <Route exact path="/jobposts">
          <JobPosts/>
        </Route> 
        <Route exact path="/work">
          <Work/>
        </Route>  
      </Switch> 
   
   </Container>
   </BrowserRouter>
  );
}

export default App;
