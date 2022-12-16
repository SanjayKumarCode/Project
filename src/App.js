import React, { useState} from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./Components/ReadOnlyRow";
import EditableRow from "./Components/EditableRow";

const App = () => {
  const [contacts, setContacts] = useState(data);

  // add data in form for placeholder
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });
// this useState for edit data
  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });


  const [editContactId, setEditContactId] = useState(null);

// onchange event  for adding  this for 
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

// Edit function
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

// making function for working adding button submit data in form or add data in tables
// formSubmit function 
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
// Store update data for making function
    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

// Edit  function
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

 // event handler function for edit button
  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

// formValues  function for fill the value
    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };
    setEditFormData(formValues);
  };

// Cancle  function
  const handleCancelClick = () => {
    setEditContactId(null);
  };

// Delete Function
  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];
// findindex is the inbuilt method to find the data
    const index = contacts.findIndex((contact) => contact.id === contactId);
// splice -  remove the data
    newContacts.splice(index, 1);

    setContacts(newContacts);
  };


  return (
    <div className="app-container">
 <form onSubmit={handleEditFormSubmit}> 
     <table>
        <thead>
        <tr>
               <th>Name</th>
               <th>Address</th>
               <th>Phone Number</th>
               <th>Email</th>
               <th>Actions</th>
       </tr>
      </thead>
           <tbody>
          {/* Map function */}
  {/* contact there work in like props */}
            {contacts.map((contact,index) => (

              <>
              {/* this is Children component used in react fragment  */}
                {editContactId === contact.id ? (

  <EditableRow
   editFormData={editFormData}
   handleEditFormChange={handleEditFormChange}
   handleCancelClick={handleCancelClick}/>  
                ) : (
  <ReadOnlyRow
   contact={contact}
   handleEditClick={handleEditClick}
   handleDeleteClick={handleDeleteClick} />  
                )}
              </>

            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>

      {/* input text this is used placeholder is input Field */}
<input type="text"  name="fullName" required="required" placeholder="Enter a name..."
  onChange={handleAddFormChange}/>

<input  type="text"  name="address" required="required" placeholder="Enter an addres..."
  onChange={handleAddFormChange}/>
      
<input type="text"  name="phoneNumber" required="required" placeholder="Enter a phone number..."
  onChange={handleAddFormChange}/>  
    
<input  type="text" name="email" required="required" placeholder="Enter an email..."
 onChange={handleAddFormChange}/>        
       
<button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;
