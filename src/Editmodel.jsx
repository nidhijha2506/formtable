import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Style.css";

const getLocalDetails =()=>
{
    let stu_details = localStorage.getItem('details');
    //console.log(stu_details);
    if(stu_details)
    {
        return JSON.parse(localStorage.getItem('details'))
    }
    else{
        return [];
    }
}

const EditButtonModel =( {closeModel,tabledata,show} )=>
    {
        const [inputdetails,setinputdetails]= useState({tabledata});
        const [inputdata,setinputdata]= useState(getLocalDetails());
        // const defaultName=tabledata.Name;

        const handleChange =(event)=>
    {
        let name=event.target.name;
        let value=event.target.value.toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
        setinputdetails(values => ({...values, [name]: value}));
    }

    const handleUpdate =(event)=>
    {
        event.preventDefault()
        event.target.reset();
        console.log(inputdetails);
        setinputdetails(inputdetails);
        setinputdata([...inputdata,inputdetails]);
        setinputdetails({});
    }
    
        return(
            <>
            {/* onClick={closeModel} */}
             <div className="model-wrapper" >
             <div className=" model-container">
                <form onSubmit={handleUpdate} className="mt-5 bg-secondary edit_form">
                <h3 className="bg-black text-white py-2 text-center stu_details">Edit Details</h3>
             <div className="edit-form-input">
             <label className="fw-bold mt-3">Full Name &nbsp;&nbsp;&nbsp;
                <input 
                required
                defaultValue={tabledata.Name}
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
                    defaultValue={tabledata.Surname}
                    
                 />
             </label><br /><br />
             <label className="fw-bold">Age&nbsp;
                 <input
                 required 
                    type="number"
                    name="Age"
                    placeholder="Fill your age"
                    onChange={handleChange}
                    min={18}
                    className="age_width age_input"
                    defaultValue={tabledata.Age}
                />
             </label><br /><br />
             <label className="fw-bold">Branch
                 <select name="Branch"
                 required 
                      className="branch_option"
                      onChange={handleChange}
                      value={tabledata.Branch}> 
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
                     onChange={handleChange}
                     value={tabledata.Section}>
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
                    defaultValue={tabledata.Rollno}  
               
                    
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
                    defaultValue={tabledata.Email}  
                   
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
                    defaultValue={tabledata.Code}  
                   
                />&nbsp;&nbsp;
                 <input 
                    required
                    className="phone_input"
                    type="text"
                    name="Phone"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    maxLength={10}
                    defaultValue={tabledata.Phone}  
                   
                />
             </label><br /><br />
             </div>
             <button onClick={closeModel} className="bg-primary">Update</button>&nbsp;&nbsp;&nbsp;
             <button onClick={closeModel} className="bg-danger">Cancel</button><br /><br />
             </form><br />
             </div>
             </div>
             
            </>
        );
    }

    export default EditButtonModel;
    // function EditButtonModel(index)
    // {
    //     console.log("filterData",filteredData)

    //      if (!inputdetails || Object.keys(inputdetails).length === 0) {
    //     alert("Please fill details in form to make changes");
    //     return; 
    // }
    //    // setinputdetails([inputdetails]);
    //     //const updatedData = [...filteredData];
    //     const oldData=filteredData.find((fn,ind)=> ind === index);
       
    //     console.log('Before',oldData);
    //     if(oldData)
    //     {
    //         oldData.Name=inputdetails.Name;
    //         oldData.Surname=inputdetails.Surname
    //         oldData.Age=inputdetails.Age
    //         oldData.Branch=inputdetails.Branch
    //         oldData.Section=inputdetails.Section
    //         oldData.Rollno=inputdetails.Rollno
    //         oldData.Email=inputdetails.Email
    //         oldData.Phone=inputdetails.Phone
    //        //setinputdetails(inputdetails);
    //     setinputdata([...inputdata]);
    //     setinputdetails({});
        
    //     }
       

    // }

    // export default EditButtonModel;