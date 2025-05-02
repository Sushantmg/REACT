import React from 'react'

const Contact = () => {
  return (
    <div className="flex items-center justify-center flex-col h-screen bg-gray-100 border-2 shadow-md">
      <form method="post">
        <label htmlFor="fname">First Name: </label>
        <br />
        <input 
          type="text" 
          name="fname" 
          id="fname" 
          placeholder="Enter Your First Name" 
          className="border-2 border-black rounded-md w-50 p-2" 
        />
        <br />
        <label htmlFor="email">Email: </label>
        <br />
        <input 
          type="email" 
          name="email" 
          id="email" 
          placeholder="Enter Your Valid Email" 
          className="border-2 border-black rounded-md w-50 p-2" 
        />
        <br />
        <label htmlFor="Textbox">Your Inquiry:</label>
        <br />
        <input 
          type="text" 
          name="Textbox" 
          id="Textbox" 
          placeholder="Your Inquiry" 
          className="border-2 border-black rounded-md w-50 p-2" 
        />
        <br />
        <input 
          type="submit" 
          value="Submit" 
          name="Submit" 
          className="text-2xl bg-gray-600 text-white rounded-md w-50 p-2" 
        />
      </form>
    </div>
  )
}

export default Contact;
