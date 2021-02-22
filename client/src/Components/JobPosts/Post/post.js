import React from 'react'
import useStyles from './style.js'
import {Card,CardActions,CardContent,Button,Typography} from '@material-ui/core'
import moment from 'moment'
const Post = ({post}) => {
    const classes=useStyles();
    return (
        <Card className={classes.card}>
        <CardContent>
        <Button className={classes.buttonSubmit} color="Secondary" size="large" variant="contained">
        {post.Jobtitle}
        </Button>      
          <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
          <Typography variant ="h5" color="textSecondary" component="">Salary per month:{post.Pay}</Typography>
        <div className={classes.details}>
          <Typography variant ="h3" component="h2">{post.Skills.map((tag) => `#${tag} `)}</Typography>
        </div>
        <Typography variant="h6" >Posted by {post.Owner}</Typography>
        </CardContent>
      </Card>
    )
}

export default Post
