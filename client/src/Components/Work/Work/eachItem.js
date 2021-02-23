import React from 'react'
import {Card,CardActions,CardMedia,CardContent,Button,Typography} from '@material-ui/core'
import moment from 'moment'
import useStyles from './styles.js'
const Eachitem = ({item}) => {
   const classes=useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} img={item.selectedFile}></CardMedia>
        <CardContent>    
          <Typography variant="body2">{moment(item.createdAt).fromNow()}</Typography>
          <Typography variant ="h5" color="textSecondary" component="">{item.name}</Typography>
        {/* <div className={classes.details}>
          <Typography variant ="h3" component="h2">{item.toolsUsed.map((tag) => `#${tag} `)}</Typography>
        </div> */}
        <Typography variant="h6" >Posted by {item.Contact}</Typography>
        </CardContent>
      </Card>
    // <h1>{item.name}</h1>
    )
}

export default Eachitem
