import React, { useState } from "react";
import "./Style.css";
function FormTable()
{
    const [inputdetails,setinputdetails]= useState({});
    const [inputdata,setinputdata]= useState([]);

    const handleChange =(event)=>
    {
        let name=event.target.name;
        let value=event.target.value;
        setinputdetails(values => ({...values, [name]: value}));
    }

    const handleSubmit =(event)=>
    {
        event.preventDefault()
        event.target.reset();
        console.log(inputdetails);
        setinputdetails(inputdetails);
        setinputdata([...inputdata,inputdetails]);
        setinputdetails({});
    }
    function handledelete(fid)
    {
        // alert(fid);
        const Updatedetails=inputdata.filter((fn,ind)=>
        {
             return ind!== fid
        })
        setinputdata(Updatedetails);
    }
    function deletedetails()
    {
        setinputdata([]);
    }
    
    
    return(
         <center>
             <form onSubmit={handleSubmit}>
                <h1>Students Details</h1>
             <label>Full Name
                <input 
                required
                   type="text"
                    name="Name"
                    placeholder="First Name"
                    onChange={handleChange}
                    maxLength={14}
                 />&nbsp;&nbsp;
                 <input 
                 required
                   type="text"
                    name="Surname"
                    placeholder="Last Name"
                    onChange={handleChange}
                    maxLength={14}
                 />
             </label><br /><br />
             <label>Age
                 <input
                 required 
                    type="date"
                    name="Age"
                    placeholder="Fill your age"
                    onChange={handleChange}
                    min={18}
                />
             </label><br /><br />
             <label>Branch
                 <select name="Branch"
                 required 
                      onChange={handleChange}>
                     <option value="">Select branch</option>
                     <option value="ME">ME</option>
                     <option value="EE">EE</option>
                     <option value="EC">EC</option>
                     <option value="IT">IT</option>
                     <option value="CS">CS</option>
                     <option value="CE">CE</option>    
                 </select>
             </label>
             <label>Section
                 <select name="Section" 
                 required
                     onChange={handleChange}>
                     <option value="">Select branch</option>
                     <option value="A">A</option>
                     <option value="B">B</option>
                     <option value="C">C</option>
                     <option value="D">D</option>
                     <option value="E">E</option>
                     <option value="F">F</option>    
                 </select>
             </label><br /><br />
             <label>Roll No
                 <input 
                    required
                    type="number"
                    name="Rollno"
                    placeholder="Please fill your roll number"
                    onChange={handleChange}
                    min={1}
                />
             </label><br /><br />
             <label>Email Id
                 <input 
                    required
                    type="text"
                    name="Email"
                    placeholder="Please fill your Email Id"
                    onChange={handleChange}
                />
             </label><br /><br />
             <label>Phone No.
             <input 
                    required
                    type="number"
                    name="Code"
                    placeholder="Area Code"
                    onChange={handleChange}
                    maxLength={2}
                />
                 <input 
                    required
                    type="number"
                    name="Phone"
                    placeholder="Phone number"
                    onChange={handleChange}
                    maxLength={10}
                />
             </label><br /><br />
             <input type="submit" /><br /><br />
             </form><br />
             
             <table cellPadding={10} cellSpacing={0} border={1}>
                <thead>
                    <tr>
                        <th>Sr no.</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Branch</th>
                        <th>Section</th>
                        <th>Roll No.</th>
                        <th>Delete</th>
                        <th>Email Id</th>
                        <th>Phone No.</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        inputdata.map((data,index)=>
                        {
                           return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{data.Name} {data.Surname}</td>
                                <td>{data.Age}</td>
                                <td>{data.Branch}</td>
                                <td>{data.Section}</td>
                                <td>{data.Rollno}</td>
                                <td>{data.Email}</td>
                                <td>{data.Code} {data.Phone}</td>
                                <td>
                                    <button type="button" onClick={()=>
                                    {
                                      handledelete(index) 
                                       
                                     
                                    }}>Delete Details</button>
                                </td>
                            </tr>
                           )
                        })
                    }
                </tbody>
             </table><br />
             <button type="button" onClick={deletedetails}>Reset All Details</button><br /><br />

         </center>
    )
}
export default FormTable;