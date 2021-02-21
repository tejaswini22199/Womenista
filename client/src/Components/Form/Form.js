import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper,Grid } from '@material-ui/core';
// import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles.js'

const Form = () => {
    const classes = useStyles();

  const [postData, setPostData] = useState({
        JobTitle: '',
        PointofContact: '', 
        Owner: '',
        Skills: [], 
         });
//   const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
//   const dispatch = useDispatch();
 
//   useEffect(() => {
//     if (post) setPostData(post);
//   }, [post]);

  const clear = () => {
    // setCurrentId(0);
    setPostData( {JobTitle: '',
    PointofContact: '', 
    Owner: '',
    Skills: []});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Create Job Post</Typography>
        <TextField name="jobtitle" variant="outlined" label="Job Title" fullWidth value={postData.JobTitle} onChange={(e) => setPostData({ ...postData, JobTitle: e.target.value })} />
        <TextField name="pointofcontact" variant="outlined" label="pointofcontact" fullWidth value={postData.PointofContact} onChange={(e) => setPostData({ ...postData, PointofContact: e.target.value })} />
        <TextField name="Owner" variant="outlined" label="Job Posted by" fullWidth multiline rows={4} value={postData.Owner} onChange={(e) => setPostData({ ...postData, Owner: e.target.value })} />
        <TextField name="Skills" variant="outlined" label="Skills (coma separated)" fullWidth value={postData.Skills} onChange={(e) => setPostData({ ...postData, Skills: e.target.value.split(',') })} />
        {/* <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div> */}
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" >Submit</Button>
        <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="large" onClick={clear} >Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;