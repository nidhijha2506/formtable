import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Style.css";

//to get data from local storage

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



function FormTable()
{
    const [inputdetails,setinputdetails]= useState({});
    const [inputdata,setinputdata]= useState(getLocalDetails());
    //const [updateDetails,setupdateDetails] = useState(inputdetails);
    const [nameFilter, setNameFilter] = useState('');
    const [surnameFilter, setsurnameFilter] = useState('');
    const [ageFilter, setAgeFilter] = useState();
    const [branchFilter, setBranchFilter] = useState();
    const [sectionFilter, setSectionFilter] = useState();
    const [rollNoFilter, setrollNoFilter] = useState('');
    const [emailFilter, setemailFilter] = useState();
    const [mobileFilter, setmobileFilter] = useState('');
    
    
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

    // function handleEdit(index)
    // {
       
    //     console.log('name is',index);
    //    // filteredData?.map((data,index)=>console.log("object",index,data));
    //     const test =  filteredData?.find((data,ind)=> ind.index === data.index)
    //     console.log('Before',test);

    //     if(test){
    //                 test.Name = '';
    //                 test.Age = '';
    //                 test.Branch='';
    //                 console.log('After',test);
    //             }

    //             setinputdetails(test);
    //             console.log(test);

    //     // updateObject.Name= 'new';
    //     // //setinputdetails(updateObject);
    //     // alert('hi');
    //     // console.log(updateObject);
    // }
    function handleEdit(index)
    {
        console.log("filterData",filteredData)

         if (!inputdetails || Object.keys(inputdetails).length === 0) {
        alert("Please fill details in form to make changes");
        return; 
    }
       // setinputdetails([inputdetails]);
        //const updatedData = [...filteredData];
        const oldData=filteredData.find((fn,ind)=> ind === index);
       
        console.log('Before',oldData);
        if(oldData)
        {
            oldData.Name=inputdetails.Name;
            oldData.Surname=inputdetails.Surname
            oldData.Age=inputdetails.Age
            oldData.Branch=inputdetails.Branch
            oldData.Section=inputdetails.Section
            oldData.Rollno=inputdetails.Rollno
            oldData.Email=inputdetails.Email
            oldData.Phone=inputdetails.Phone
           //setinputdetails(inputdetails);
        setinputdata([...inputdata]);
        setinputdetails({});
        
        }
       

    }


    const filteredData = inputdata.filter((data) => {
        const nameMatch = data.Name?.toLowerCase().includes(nameFilter.toLowerCase());
        const surnameMatch= data.Surname?.toLowerCase().includes(surnameFilter.toLowerCase());
        //const ageMatch = data.Age?.toString().includes(ageFilter);
        //const branchMatch = data?.Branch.toLowerCase().includes(branchFilter.toLowerCase());
        //const sectionMatch = data?.Section.toLowerCase().includes(sectionFilter.toLowerCase());
        //const rollnoMatch = data?.Rollno.toString().includes(rollNoFilter);
        //const emailMatch = data?.Email.toLowerCase().includes(emailFilter.toLowerCase());
        //const phonenoMatch = data?.Phone.toString().includes(mobileFilter);
        

        return nameMatch && surnameMatch 
         ;
  });

//   console.log("filterData",filteredData)
  
//   filteredData?.map((data,index)=>console.log("object",index,data))
// useEffect(()=>{

//     const test =  filteredData?.find((data,index)=> index===1 )
//     console.log('Before',test);
//     if(test){
//         test.Name = 'A';
//         test.Age = 26;
//         test.Branch="IT";
//         console.log('After',test);
//     }
// },[filteredData]);
  useEffect(()=>
    {
        //console.log('Before storing in local storage:', inputdata);
        localStorage.setItem('details',JSON.stringify(inputdata))
        //console.log('After storing in local storage:', inputdata);
    }, [inputdata]);

    // function handleEdit(index)
    // {
    //     console.log('Editing row:', index);
        
    //     setupdateDetails(index);
    // }

    
    
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
                    value={inputdetails.Name || ''}
                 />&nbsp;&nbsp;
                 <input 
                 required
                   type="text"
                    name="Surname"
                    placeholder="Last Name"
                    onChange={handleChange}
                    maxLength={14}
                    className="w-25"
                    value={inputdetails.Surname || ''}
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
                    value={inputdetails.Age || ''}
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
                    value={inputdetails.Section || ''}
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
                value={inputdetails.Rollno || ''}
                    
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
                    value={inputdetails.Email || '' }
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
                    value={inputdetails.Code || ''}
                />&nbsp;&nbsp;
                 <input 
                    required
                    className="phone_input"
                    type="text"
                    name="Phone"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    maxLength={10}
                    value={inputdetails.Phone || ''}
                />
             </label><br /><br />
             <input type="submit" className="bg-primary w-25 h5 fw-bold h-25 submit_btn" /><br /><br />
             </form><br />

            <div className="filter-div">
            <input type="text" value={nameFilter} 
            onChange={(e) => setNameFilter(e.target.value)} 
            placeholder="Name" className=" text-center search-name"/>
            <input type="text" value={surnameFilter} 
            onChange={(e) => setsurnameFilter(e.target.value)} 
            placeholder="Surname" className="search-surname"/>
            
            <input type="text" value={ageFilter} 
            onChange={(e) => setAgeFilter(e.target.value)}
            placeholder="Age" className=" text-center search-age"
             />
            
             <input type="text" value={branchFilter} 
             onChange={(e) => setBranchFilter(e.target.value)}
             placeholder="Branch" className="text-center search-branch"
              />

             <input type="text" value={sectionFilter} 
             onChange={(e) => setSectionFilter(e.target.value)}
             placeholder="Section" className="text-center search-section"
              />
            
            <input type="text" value={rollNoFilter} 
             onChange={(e) => setrollNoFilter(e.target.value)}
             placeholder="Roll No" className="text-center rollno-section"
              />

            <input type="text" value={emailFilter} 
             onChange={(e) => setemailFilter(e.target.value)}
             placeholder="Email Address" className="text-center email-section"
              />

            <input type="text" value={mobileFilter} 
             onChange={(e) => setmobileFilter(e.target.value)}
             placeholder="Phone No" className="text-center phone-section"
              /> <br /><br />
            </div>
            

             
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
                        <th className="delete_th">Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {
                        filteredData?.map((data,index)=>
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
                                    <button type="button" onClick={()=> handleEdit(index)}
                                    className="bg-success">Edit</button>
                                </td>
                                <td>
                                    <button type="button" onClick={()=>
                                    {
                                      handledelete(index) 
                                       
                                     
                                    }} className="bg-danger">Delete</button>
                                </td>
                            </tr>)
                           
                        })
                    }
                </tbody>
             </table><br />
             <button type="button" onClick={deletedetails} className="bg-danger reset_button">Reset All Details</button><br /><br />

         </>
    )
}
export default FormTable;
