import React,{useState} from "react";

const Log = () => {

  const[input,setinput]=useState("");


  return (
    <>
      <div className="flex flex-col mt-36 ml-40">
        <div className="text-[#3F4547] text-3xl font-bold">
          <h1>Log in to your Tikki.to account</h1>
        </div>
        <input
          type="text"
          placeholder="Enter Email"
          className="mt-10 outline-0 h-14 w-96 border border-[gray] pl-4 ml-4 rounded-sm" value={input} onChange={(e)=>{
           
           setinput(e.target.value);
           console.log(input)

          }}
        />
        <input
          type="text"
          placeholder="Enter Your Password"
          className="mt-10 outline-0 h-14 w-96 border border-[gray] pl-4 ml-4 rounded-sm"
        />
        <button className="text-[white] bg-[#03A84E] h-14 w-96 text rounded-md mt-10 ml-4 font-bold ">
          Sign in
        </button>
        <div className="flex flex-row mt-6 pl-6">
          <input type="checkbox" name="" id="" className="pl-3" />
          <div className="text-[#3F4547] pl-2">Remember Me</div>
          <div className="text-[#03A84E] pl-32">Forget Password?</div>
        </div>
        <div className="flex flex-row pl-14 mt-5">
          <div className="text-[#3F4547]">Don't have an account?</div>
          <div className="text-[#03A84E] pl-1 underline ">
            Create free account
          </div>
        </div>
      </div>
    </>
  );
};

export default Log;
