import * as React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function Demo() {
    const paperStyle={padding:'50px 20px', width: 600,margin:"20px auto"};
    const [name,setName] = React.useState('')
    const [address,setAddress]= React.useState('')
    const handleClick=(e)=>{
      e.preventDefault()
      const student={name,address}
      console.log(student)
      fetch("http://localhost:8080/demo/add" ,{
        method:"POST",
        headers:{"content-Type":"application/json"},
        body:JSON.stringify(student) 
      }).then(()=>{
        console.log("New Student added")
      }) 
    }
    

  return (
    
    <container>
    <paper elevation={3} style={paperStyle}>
        
      <Box 
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width:600 ,padding:'50px 20px', margin:"20px auto"},
      }}
      noValidate
      autoComplete="off"
    ><div style={{ display:'flex', flexDirection: 'column', gap: '20px' }} >
     <h1 style={{color:"Orchid"}}> Add Student </h1>
      <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth 
      value={name} onChange={(e)=>setName(e.target.value)} />
      <TextField id="outlined-basic" label="Student Adress" variant="outlined" fullWidth
      value={address} onChange={(e)=>setAddress(e.target.value)} />
      <Button variant="contained" color="secondary" onClick={handleClick}>Submit</Button>
    </div>
    </Box>
    </paper>
    </container> 
  );
}