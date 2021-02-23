import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper,Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles.js'
import {postWork} from '../../Actions/getwork.js'
import FileBase from 'react-file-base64';
//import {useSelector} from 
const Workform = () => {
    const classes = useStyles();

  const [workData, setworkData] = useState({
        name:'',
        Contact:'',
        toolsUsed:'',

         });
           // const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();

  const clear = () => {
    // setCurrentId(0);
    setworkData({
      name:'',
        Contact:'',
        toolsUsed:'',
    });
   
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(postWork(workData));
    console.log(workData);
  };

  return (
    <Paper className={classes.paper}>
      <form className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Post Your Work</Typography>
        <TextField name="name" variant="outlined" label="Name" value={workData.name} onChange={(e) => setworkData({ ...workData, name: e.target.value })} />
        <TextField name="contact" variant="outlined" label="Contact"  value={workData.Contact} onChange={(e) => setworkData({ ...workData, Contact: e.target.value })} />
        <TextField name="Skills" variant="outlined" label="Tech Stack/Material Used"  value={workData.toolsUsed} onChange={(e) => setworkData({ ...workData, toolsUsed: e.target.value.split(',') })} />
        {/* <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div> */}
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={(base64)=>setworkData({...workData,selectedFile:base64})}/></div>
        <div className="btns">
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" >Submit</Button>
        <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="large" onClick={clear} >Clear</Button>
        </div>
      </form>
    </Paper>
  );
};

export default Workform;