import React from 'react';
import { useSelector } from 'react-redux';
import { RenderFormFields } from '../util';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
const useStyles = makeStyles(() => ({
    root: {
        padding: '2rem'
    },
    paper: {
        padding: '1rem',
        minHeight:'20rem',
        marginBottom:'1rem'
    }
}));
const FormList = () => {
    const classes = useStyles();
    const formList = useSelector((state) => state.FormReducer);
    if(formList.length === 0){
        return null;
    }
    return (
        <Grid container spacing={4} className={classes.root}>
            
            {
                formList.map((form, index) => 
                    <Grid item xl={2} lg={2} md={2} sm={12} xs={12} key={index}>
                        <Paper key={form.fields.id} className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Typography variant="h4" gutterBottom>{form.title}</Typography>
                                </Grid>
                                {
                                    form.fields.map(({id,name, label, type})=>
                                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} key={id}>
                                            <RenderFormFields 
                                                name={name}
                                                label={label}
                                                type={type}
                                            />
                                        </Grid>
                                    )
                                }
                            </Grid>
                        </Paper>
                    </Grid>
                )
            }
        </Grid>
    )
}

export default FormList;
