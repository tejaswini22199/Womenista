import { makeStyles, withTheme } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#3A0657',
     textDecoration:"none",
  },
  image: {
    marginLeft: '15px',
  },
  textC:{
    color: '#FFFFFF',
  },
  buttonSubmit: {
      padding:10,
    margin: 10,
   
   
  },
}));