import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addStudent} from '../../actions/studentsAction'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const AddStudent = (props) => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [percentage, setPercentage] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const errors={}

    const handleChange = (e) =>{
        const result = e.target.name
        if(result === 'name'){
            setName(e.target.value)
        }else if(result === 'city'){
            setCity(e.target.value)
        }else if(result === 'percentage'){
            setPercentage(e.target.value)
        }
    }
    const runValidation =(e) =>{
        //name
        if(name.trim().length === 0){
           errors.name = `name cann't be blank`
        }
        //city
        if(city.trim().length === 0){
            errors.city = `city cann't be blank`
        }
        //percentage
        if(percentage.trim().length === 0){
            errors.percentage = `percentage cann't be blank`
        }

    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        runValidation()
        if(Object.keys(errors).length === 0){
            setFormErrors({})
            const formData = {
                id: Number(new Date()),
                name: name,
                city: city,
                percentage: percentage
            }

            dispatch(addStudent(formData))
            setName('')
            setCity('')
            setPercentage('')
        }else{
            setFormErrors(errors)
        }

    }
    return (
        <div>
            <h2 style={{color: "blue"}}>Add Student</h2>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}> 
                        <TextField variant="outlined" size="small"  type="text" label="Name" name="name" value={name} onChange={handleChange} />
                        { formErrors.name && <Typography style={{color : 'red'}}> {formErrors.name} </Typography> }
                    </Grid>
                    <Grid item xs={12}> 
                        <TextField variant="outlined" size="small"  type="text" label="City" name="city" value={city} onChange={handleChange} />
                        { formErrors.city && <Typography style={{color : 'red'}}> {formErrors.city} </Typography> }
                    </Grid>
                    <Grid item xs={12}> 
                        <TextField variant="outlined" size="small"  type="text" label="Percentage" name="percentage" value={percentage} onChange={handleChange} />
                        { formErrors.percentage && <Typography style={{color : 'red'}}> {formErrors.percentage} </Typography> }
                    </Grid>
                    <Grid item xs={12}> 
                        <Button type="submit" size="small" variant="contained" color="primary"> Add </Button>
                    </Grid>
                </Grid>
                {/* <label>Name</label>
                <input type="text" value={name} name="name" onChange={handleChange} /><br />
                <label>City</label>
                <input type="text" value={city} name="city" onChange={handleChange} /><br />
                <label>Percentage</label>
                <input type="text" value={percentage} name="percentage" onChange={handleChange} /><br />
                <input type="submit" value="Add"/> */}
            </form>
        </div>
    )
}
export default AddStudent