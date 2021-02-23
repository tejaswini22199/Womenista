import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
     
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexDirection:'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    margin: 10,
  },
  btns:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }
}));