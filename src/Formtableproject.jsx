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
    const [UpdateDetails,setupdateDetails] = useState(-1);
    const [nameFilter, setNameFilter] = useState('');
    const [ageFilter, setAgeFilter] = useState('');
    const [branchFilter, setBranchFilter] = useState('');
    const [sectionFilter, setSectionFilter] = useState('');
    const [rollNoFilter, setrollNoFilter] = useState('');
    const [emailFilter, setemailFilter] = useState('');
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
    
    // function handleEdit(index)
    // {
    //     console.log('Editing row:', index);
    //     //filteredData.find();
    //     setupdateDetails(index);
    // }
    function handleEdit(index) {
        console.log('Editing row:', index);
        setupdateDetails(index);
      }
    

    function Edit({data,inputdata,setinputdata,setupdateDetails})
    {
        const [localData, setLocalData] = useState(JSON.parse(JSON.stringify(data))); 

        function handleInput(e) {
        const { name, value } = e.target;
        setLocalData((prevData) => ({ ...prevData, [name]: value }));
        }
        
        function handleUpdate(e)
        {
             //e.preventDefault();
             console.log('Before Update:', inputdata);
            //  setinputdata((prevInputData) =>
            //  prevInputData.map((li) => (li.index === data.index ? { ...li, ...localData } : li))
            //  );

            const rowIndex = inputdata.findIndex((li) => li.index === data.index);
            console.log('rowindex',rowIndex);

            if (rowIndex !== -1) {
                const updatedData = [...inputdata];
                console.log('updateddata',updatedData);
                updatedData[rowIndex] = { ...updatedData[rowIndex], ...localData };
                setinputdata(updatedData);
                
        
                console.log('After Update:', updatedData);
                setupdateDetails(-1);
            } else {
                console.error('Row not found for update');
            }
            //  console.log('After Update:', inputdata);
            //  setupdateDetails(-1)
            
        }
           return(
            <tr>
                <td>
                    <input 
                required
                   type="text"
                    name="Name"
                    placeholder="First Name"
                    onChange={handleInput}
                    maxLength={14}
                    className="w-25"
                    value={localData.Name}
                 />
                </td>
                <td><button type="submit" onClick={handleUpdate}>Update</button></td>
                
            </tr>
           )
    }
    

   

    function deletedetails()
    {
        setinputdata([]);
    }


    const filteredData = inputdata.filter((data) => {
        const nameMatch = data.Name.toLowerCase().includes(nameFilter.toLowerCase());
        const ageMatch = data.Age.toString().includes(ageFilter);
        const branchMatch = data.Branch.toLowerCase().includes(branchFilter.toLowerCase());
        const sectionMatch = data.Section.toLowerCase().includes(sectionFilter.toLowerCase());
        const rollnoMatch = data.Rollno.toString().includes(rollNoFilter);
        const emailMatch = data.Email.toLowerCase().includes(emailFilter.toLowerCase());
        const phonenoMatch = data.Phone.toString().includes(mobileFilter);
        

        return nameMatch && ageMatch && branchMatch && sectionMatch && rollnoMatch && 
        emailMatch && phonenoMatch;
  });

  useEffect(()=>
    {
        console.log('Before storing in local storage:', inputdata);
        localStorage.setItem('details',JSON.stringify(inputdata))
        console.log('After storing in local storage:', inputdata);
    }, [inputdata]);
    
    
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
                    type="number"
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
                    placeholder="Phone Number"
                    onChange={handleChange}
                    maxLength={10}
                />
             </label><br /><br />
             <input type="submit" className="bg-primary w-25 h5 fw-bold h-25 submit_btn" /><br /><br />
             </form><br />

            <div className="filter-div">
            <input type="text" value={nameFilter} 
            onChange={(e) => setNameFilter(e.target.value)} 
            placeholder="Name" className=" text-center search-name"/>
            
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
                        <th className="delete_th">Delete & Edit</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {
                        filteredData?.map((data,index)=>
                        {
                           
                           return (
                            UpdateDetails === index ? 
                            (<Edit key={index} 
                                data={data} 
                                inputdata={inputdata} 
                                setinputdata={setinputdata}
                                setupdateDetails={setupdateDetails}
                                />):
                            (<tr key={index}>
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

                                    <button type="button" onClick={()=>
                                    {
                                      handledelete(index) 
                                       
                                     
                                    }} className="bg-danger">Delete</button>
                                </td>
                            </tr>)
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
