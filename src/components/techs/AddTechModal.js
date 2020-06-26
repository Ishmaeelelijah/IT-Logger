import React,{useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
const AddTechModal = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')


    const onsubmit =() => {
        if (firstName === '' || lastName ==='') {
            M.toast({ html: 'Please enter a firstName and lastName'})
        }
        else{
            console.log(firstName, lastName)

             //Clear Fields
             setFirstName('');
             setLastName('');
        }
    };

  return (
    <div id='add-tech-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
          <h4>New Technician</h4>
          <div className='row'>
              <div className='input-field'>
                  <input type='text' name='firstName' value={firstName} onChange={e => setFirstName(e.target.value)}/>
                  <label htmlFor='FirstName' className='active'>
                      First Name
                  </label>
              </div>
          </div>
           
          <div className='row'>
              <div className='input-field'>
                  <input type='text' name='lastName' value={lastName} onChange={e => setLastName(e.target.value)}/>
                  <label htmlFor='LastName' className='active'>
                      Last Name
                  </label>
              </div>
          </div>
            </div>
      <div className='modal-footer'>
        <a href='#!' onClick={onsubmit} className='modal-close waves-effect black btn'>Enter </a>
      </div>
    </div>
  )
}
 const modalStyle = {
     width: '50%',
     height: '50%'
 }


export default AddTechModal
