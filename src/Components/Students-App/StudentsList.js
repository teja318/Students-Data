import React,{useState} from 'react'
import {useSelector} from 'react-redux'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search'
import InputAdornment from "@material-ui/core/InputAdornment"
import {Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core'
const StudentsList = (props) =>{
    const[search, setSearch] = useState('')
    const students = useSelector((state) => {
        return state.students
    })

    //search functionality
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const studentsData = students.filter((student)=>{
        return student.city.toLowerCase().match(search.toLowerCase()) || student.name.toLowerCase().match(search.toLowerCase())
    })
    return(
        <div>
            <h2 style={{color: "blue"}}>Listing Students - {students.length} </h2>
            <TextField  
                style={{width: '30%', marginBottom : '25px'}}
                variant="outlined"
                size="small"
                type = "text" 
                placeholder = 'Search by name, city...'
                onChange = {handleChange} 
                value = {search}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
  
            />
            <Grid container spacing={2} >
                <Table border="2" size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>Percentage</TableCell>
                        </TableRow>
                                
                    </TableHead>
                    <TableBody>
                        {studentsData.map((ele,i) => {
                            return (
                                <TableRow key={i}>
                                    <TableCell>{ele.name}</TableCell>
                                    <TableCell>{ele.city}</TableCell>
                                    <TableCell>{ele.percentage}%</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                 </Table>
            </Grid>
            
        </div>
    )
}
export default StudentsList