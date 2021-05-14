import React from 'react'
import StudentsList from './StudentsList'
import AddStudent from './AddStudent'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}))


const StudentsContainer = (props) =>{
    return(
        <div className={useStyles().root}>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <Paper className={useStyles().paper}><StudentsList /></Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={useStyles().paper}><AddStudent /></Paper>
                </Grid>
          
            </Grid>
        </div>
    )
}
export default StudentsContainer