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
    // function handledelete(ind)
    // {
    //    const updatedetails= inputdata.filter(li => li.ind !== ind)
    //    setinputdata(updatedetails);
    // }
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
                   type="text"
                    name="Name"
                    placeholder="First Name "
                    onChange={handleChange}
                 />
                 <input 
                   type="text"
                    name="Surname"
                    placeholder="Last Name"
                    onChange={handleChange}
                 />
             </label><br /><br /><br />
             <input type="submit" />
             </form><br />
             <button type="button" onClick={deletedetails}>Reset Detials</button>

             <table cellPadding={1} cellSpacing={0} border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Delete</th>
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
                                <td>
                                    <button type="button" onClick={()=>
                                    {
                                      handledelete(index) 
                                       
                                     
                                    }}>Delete</button>
                                </td>
                            </tr>
                           )
                        })
                    }
                </tbody>
             </table>
         </center>
    )
}
export default FormTable;