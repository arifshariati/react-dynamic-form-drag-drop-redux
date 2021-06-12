import React,{ useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { FormActions } from '../redux/actions';
import { validator } from '../util';
// components
import { Properties, DropableArea, AddForm } from '.';
// MUI
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2rem'
    }
}));

const MainContainer = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [dropableList, updateDropableList] = useState([]);
    const [title, setTitle] = useState("");
    const [validationError, setValidationError] = useState({});
    const [fieldProperties, setFieldProperties] = useState({
        id:"",
        name:"",
        label:"",
        type:""
    });
    const clearError = (fieldName) => {
        setValidationError({
        ...validationError,
        [fieldName]: "",
        });
    };

    const clearValues = () => {
        setFieldProperties({
        name: "",
        label: "",
        type:""
        });
    };
    const clearTitle = () => {
        setTitle("");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFieldProperties({
        ...fieldProperties,
        [name]:value
        });
        clearError(name);
    };

    const handleTitleChange = (e) => {

        const { name, value } = e.target;
        setTitle(value);
        clearError(name);
    };

    const handleDropable = (result) => {
        
        if(!result.destination) return;
        const items = Array.from(dropableList);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        updateDropableList(items);

    };

    const addFormField = () => {
        
        validator.propertiesConsValidator(fieldProperties)
        .then(() => {
            fieldProperties.id = uuid();
            updateDropableList([...dropableList,fieldProperties]);
            clearValues();
            clearError();
        })
        .catch((error) => {
            setValidationError(error);
        })
    };

    const addForm = () => {
        validator.addFormConsValidator({title})
        .then(() => {
            const formObject = {
                title,
                fields: dropableList
            };
            dispatch(FormActions.create_form(formObject));
            updateDropableList([]);
            clearTitle();
        })
        .catch((error) => {
            setValidationError(error);
        })
    };
    
    return (
        <Grid container spacing={4} className={classes.root}>
            {/* Properties Panel */}
            <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
                <Properties 
                    addFormField={addFormField}
                    handleChange={handleChange}
                    validationError={validationError}
                    fieldProperties={fieldProperties}
                />
            </Grid>
            {/* Dragable Panel */}
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                <DropableArea 
                    dropableList={dropableList} 
                    handleDropable={handleDropable}
                />
                {
                    dropableList.length > 0 ? (
                        <AddForm 
                            title={title}
                            handleTitleChange={handleTitleChange}
                            addForm={addForm}
                            validationError={validationError}
                        />
                    ) : null
                }
                
            </Grid>    
        </Grid>
    )
}

export default MainContainer;
