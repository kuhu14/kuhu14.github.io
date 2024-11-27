import React from 'react'

export default function Signup() {
  return (
    <div>
        Signup
        <p>
            <input type="text" placeholder="Enter Name"></input>
        </p>
        <p>
            <input type="text" placeholder="Enter Email"></input>
        </p>
        <p>
            Date of Birth: <input type="datetime-local"></input>
        </p>
        <p>
            Location: <input type="radio" name="Location"></input> Hyderabad <input type="radio" name="Location"></input> Delhi
        </p>
        <button>Sign Up</button>
        <hr></hr>
        <p>Already a member?</p>
        <button> Login Here</button>
    </div>
  );
};
