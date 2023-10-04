import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Style.css";
function FormTable()
{
    const [inputdetails,setinputdetails]= useState({});
    const [inputdata,setinputdata]= useState([]);

    const handleChange =(event)=>
    {
        let name=event.target.name;
        let value=event.target.value.toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
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
         <>
             <form onSubmit={handleSubmit} className="mt-5">
                <h3 className="bg-black text-white py-2 text-center stu_details">Students Details</h3>
             <label className="fw-bold mt-3">Full Name &nbsp;&nbsp;&nbsp;
                <input 
                required
                   type="text"
                    name="Name"
                    placeholder="First Name"
                    onChange={handleChange}
                    maxLength={14}
                    className="w-25"
                 />&nbsp;&nbsp;
                 <input 
                 required
                   type="text"
                    name="Surname"
                    placeholder="Last Name"
                    onChange={handleChange}
                    maxLength={14}
                    className="w-25"
                 />
             </label><br /><br />
             <label className="fw-bold">Age&nbsp;
                 <input
                 required 
                    type="date"
                    name="Age"
                    placeholder="Fill your age"
                    onChange={handleChange}
                    min={18}
                    className="age_width age_input"
                />
             </label><br /><br />
             <label className="fw-bold">Branch
                 <select name="Branch"
                 required 
                      className="branch_option"
                      onChange={handleChange}>
                     <option value="">Branch</option>
                     <option value="ME">ME</option>
                     <option value="EE">EE</option>
                     <option value="EC">EC</option>
                     <option value="IT">IT</option>
                     <option value="CS">CS</option>
                     <option value="CE">CE</option>    
                 </select>
             </label>
             <label className="fw-bold section_margin">Section
                 <select name="Section" 
                 required
                    className="section_option"
                     onChange={handleChange}>
                     <option value="">Section</option>
                     <option value="A">A</option>
                     <option value="B">B</option>
                     <option value="C">C</option>
                     <option value="D">D</option>
                     <option value="E">E</option>
                     <option value="F">F</option>    
                 </select>
             </label><br /><br />
             <label className="fw-bold">Roll No
                 <input 
                    required
                    className="roll_input"
                    type="number"
                    name="Rollno"
                    placeholder="Please fill your roll number"
                    onChange={handleChange}
                    min={1}
                />
             </label><br /><br />
             <label className="fw-bold">Email Id
                 <input 
                    required
                    className="email_input"
                    type="text"
                    name="Email"
                    placeholder="Please fill your Email Id"
                    onChange={handleChange}
                />
             </label><br /><br />
             <label className="fw-bold">Phone No.
             <input 
                    required
                    className="areacode_input"
                    type="text"
                    name="Code"
                    placeholder="Area Code"
                    onChange={handleChange}
                    maxLength={2}
                />&nbsp;&nbsp;
                 <input 
                    required
                    className="phone_input"
                    type="text"
                    name="Phone"
                    placeholder="Phone number"
                    onChange={handleChange}
                    maxLength={10}
                />
             </label><br /><br />
             <input type="submit" className="bg-primary w-25 h5 fw-bold h-25 submit_btn" /><br /><br />
             </form><br />
             
             <table cellPadding={10} cellSpacing={0} border={1} className="bg-secondary text-center">
                <thead>
                    <tr>
                        <th>Sr no.</th>
                        <th className="name_th">Name</th>
                        <th className="age_th">Age</th>
                        <th>Branch</th>
                        <th>Section</th>
                        <th>Roll No.</th>
                        <th className="email_th">Email Id</th>
                        <th className="phone_th">Phone No.</th>
                        <th className="delete_th">Delete</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
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
                                       
                                     
                                    }} className="bg-danger">Delete</button>
                                </td>
                            </tr>
                           )
                        })
                    }
                </tbody>
             </table><br />
             <button type="button" onClick={deletedetails} className="bg-danger reset_button">Reset All Details</button><br /><br />

         </>
    )
}
export default FormTable;