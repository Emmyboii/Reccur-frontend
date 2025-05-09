import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { FaRegImage } from "react-icons/fa6";

const UploadDocument = () => {
  const location = useLocation()

  const [frontDoc, setFrontDoc] = useState(null)
  const [backDoc, setBackDoc] = useState(null)
  const [verified, setVerified] = useState(false)

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    id_type: '',
    front_national_id: null,
    back_national_id: null
  })

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleFrontDocChange = (e) => {
    const selected = e.target.files[0]
    if (selected) {
      const previewURL = URL.createObjectURL(selected); // Create a temporary URL for the image
      setFrontDoc(selected)
      setFormData(prev => ({
        ...prev,
        front_national_id: previewURL
      }));
    }
  }

  const handleBackDocChange = (e) => {
    const selected = e.target.files[0]
    if (selected) {
      const previewURL = URL.createObjectURL(selected); // Create a temporary URL for the image
      setBackDoc(selected)
      setFormData(prev => ({
        ...prev,
        back_national_id: previewURL
      }));
    }
  }

  const VerifyDocument = async (e) => {
    e.preventDefault()

    setIsSubmitting(true);

    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/create-kyc`, {
        method: 'POST',
        
        headers: {
          Accept: 'application/json',
          Authorization: `Token ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'KYC failed');
      } else {
        console.log('KYCAdded:', data);
      }

    } catch (error) {
      console.error('Error during KYC:', error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className='flex flex-col max-w-[540px] px-4 mx-auto md:p-10 py-10'>
      <div>
        <h1 className='text-[28px] font-medium text-[#1D1C1F] text-center'>Upload your Documents</h1>
        <p className='text-[#525154] text-[14px] font-normal  text-center'>
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
      <div className='mt-8 flex flex-col gap-6 text-[#525154] font-medium text-[14px]'>
        <div>
          <label htmlFor="code">Select Document</label>
          <select
            name="id_type"
            value={formData.id_type}
            onChange={handleChange}
            className="border-[1.5px] mt-1 border-black/20 rounded-lg w-full py-[10px] px-[14px] outline-none"
          >
            <option value="">Select ID Type</option>
            <option value="passport">Passport</option>
            <option value="nin">NIN</option>
            <option value="driver_license">Driver's License</option>
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
                    className='w-full h-[140px] rounded-md cursor-pointer object-cover'
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
            <p className='text-[#531CB3]'>Upload Front</p>
          </div>
          <div className='w-full'>
            <label htmlFor="backdoc">
              <div className='bg-[#eae2f6] cursor-pointer rounded-md h-[150px] border-2 border-black/50 flex items-center justify-center'>
                {backDoc ? (
                  <img
                    src={URL.createObjectURL(backDoc)}
                    alt=''
                    className='w-full h-[140px] rounded-md cursor-pointer object-cover'
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
            <p className='text-[#531CB3]'>Upload Back</p>
          </div>
        </div>
      </div>
      <div className='flex gap-2 mt-10'>
        <button
          className='p-3 rounded-lg w-[25%] text-[#525154] border-[1.5px] border-black/10'
          onClick={() => {
            window.location.replace('/dashboard/verifyidentity')
            window.scrollTo(0, 0)
          }}
        >
          Previous
        </button>
        <button
          className={`p-[10px] px-4 rounded-lg text-white w-[80%] ${isSubmitting ? 'bg-[#E8E1F5]' : 'bg-[#531CB3]'}`}
          onClick={(e) => {
            VerifyDocument(e)
            window.location.replace('/home')
            setVerified(!verified)
            localStorage.setItem('userCreated', JSON.stringify(!verified))
          }}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            'Loading...'
          ) : (
            'Submit Application'
          )}
        </button>
      </div>
    </div>
  )
}

export default UploadDocument