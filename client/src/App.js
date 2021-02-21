import './App.css';
import { Container, AppBar, Typography, Grow, Grid,Button } from '@material-ui/core';
import Form from './Components/Form/Form.js'
import JobPosts from './Components/JobPosts/JobPosts.js'
import useStyles from './Styles.js'
const App=()=> {
  const classes=useStyles();
  return (
    <Container maxWidth="lg">
     <AppBar className={classes.appBar} position="static" color="inherit">
     <Container>
     <Grid  container justify="space-between"  alignItems="stretch" spacing={2}> 
     <Grid item >
       <Typography className={classes.heading} variant="h2" align="center">Welcome to Womenista</Typography>
       </Grid>
       <Grid item >
       <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" >ViewJobs</Button>
       </Grid>
     </Grid>
    </Container>
     </AppBar>
    <Grow in>
       <Container>
         <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          {/* <Grid item xs={12} sm={7}> */}
            {/* <JobPosts /> */}
            {/* <h1>Jobposts</h1>
           </Grid>
           <Grid item xs={12} sm={4}> */}
             <Form />
           {/* </Grid> */}
         </Grid>
       </Container>
     </Grow>
   </Container>
  
  );
}

export default App;
