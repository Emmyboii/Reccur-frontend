import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaRegImage } from "react-icons/fa6";

const UploadDocument = () => {
  const navigate = useNavigate();
  const location = useLocation()

  const [frontDoc, setFrontDoc] = useState(null)
  const [backDoc, setBackDoc] = useState(null)
  const [verified, setVerified] = useState(false)

  const handleFrontDocChange = (e) => {
    const selected = e.target.files[0]
    if (selected) {
      setFrontDoc(selected)
    }
  }

  const handleBackDocChange = (e) => {
    const selected = e.target.files[0]
    if (selected) {
      setBackDoc(selected)
    }
  }

  return (
    <div className='flex flex-col px-[250px] py-[30px]'>
      <div>
        <h1 className='text-[30px] text-center'>Upload your Documents</h1>
        <p className='text-black/60 text-center'>
          Help us verify your identity by uploading the required documents. This ensures your
          account stays secure and fully compliant.
        </p>
      </div>
      <div className='flex items-center justify-center gap-2 mt-5 transition-all duration-300'>
        <p className={location.pathname === '/verifynumber' ? 'bg-[#411c87] h-1 w-20 rounded-md' : 'bg-gray-300 h-1 w-5 rounded-md'}></p>
        <p className={location.pathname === '/verifyaddress' ? 'bg-[#411c87] h-1 w-20 rounded-md' : 'bg-gray-300 h-1 w-5 rounded-md'}></p>
        <p className={location.pathname === '/verifyidentity' ? 'bg-[#411c87] h-1 w-20 rounded-md' : 'bg-gray-300 h-1 w-5 rounded-md'}></p>
        <p className={location.pathname === '/uploadDocument' ? 'bg-[#411c87] h-1 w-20 rounded-md' : 'bg-gray-300 h-1 w-5 rounded-md'}></p>
      </div>
      <div className='mt-8 flex flex-col gap-4 text-black/70'>
        <div>
          <label htmlFor="code">Select Document</label>
          <select className='border-[1.5px] mt-1 border-black/20 rounded-md w-full p-2 outline-none'>
            <option value="nigeria">Passport</option>
            <option value="nigeria">Lekki</option>
            <option value="nigeria">Lekki</option>
            <option value="nigeria">Lekki</option>
            <option value="nigeria">Lekki</option>
            <option value="nigeria">Lekki</option>
          </select>
        </div>
        <div className='flex gap-4 mt-4'>
          <div className='w-full'>
            <label htmlFor="frontDoc">
              <div className='bg-[#eae2f6] cursor-pointer rounded-md h-[150px] border-2 border-black/50 flex items-center justify-center'>
                {frontDoc ? (
                  <img
                    src={URL.createObjectURL(frontDoc)}
                    alt=''
                    className='w-full h-[150px] rounded-md cursor-pointer object-cover'
                  />
                ) : (
                  <FaRegImage className='text-[25px] text-black/40' />
                )}
              </div>
              <input
                type="file"
                name=""
                id="frontDoc"
                onChange={handleFrontDocChange}
                hidden
              />
            </label>
            <p className='text-[#411c87]'>Upload Front</p>
          </div>
          <div className='w-full'>
            <label htmlFor="backdoc">
              <div className='bg-[#eae2f6] cursor-pointer rounded-md h-[150px] border-2 border-black/50 flex items-center justify-center'>
                {backDoc ? (
                  <img
                    src={URL.createObjectURL(backDoc)}
                    alt=''
                    className='w-full h-[150px] rounded-md cursor-pointer object-cover'
                  />
                ) : (
                  <FaRegImage className='text-[25px] text-black/40' />
                )}
              </div>
              <input
                type="file"
                name=""
                id="backdoc"
                onChange={handleBackDocChange}
                hidden
              />
            </label>
            <p className='text-[#411c87]'>Upload Back</p>
          </div>
        </div>
      </div>
      <div className='flex gap-2 mt-10'>
        <button
          className='p-3 rounded-lg w-[30%] border-[1.5px] border-black/10'
          onClick={() => {
            navigate(-1)
            window.scrollTo(0, 0)
          }}
        >
          Previous
        </button>
        <button
          className='p-3 rounded-lg bg-[#411c87] text-white w-[70%]'
          onClick={() => {
            navigate('/home')
            setVerified(!verified)
            localStorage.setItem('detailsVerified', JSON.stringify(!verified))
            window.scrollTo(0, 0)
          }}
        >
          Submit application
        </button>
      </div>
    </div>
  )
}

export default UploadDocument