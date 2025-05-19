import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaRegImage } from "react-icons/fa6";
import { Context } from '../Context/Context';

const UploadDocument = () => {
  const location = useLocation()
  const navigate = useNavigate();

  const { forms } = useContext(Context)


  const [passport, setPassport] = useState(null)
  const [frontDoc, setFrontDoc] = useState(null)
  const [backDoc, setBackDoc] = useState(null)
  const [verified, setVerified] = useState(false)

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    id_type: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedFormData = {
      ...formData,
      [name]: value
    };
    setFormData(updatedFormData);

    const prevData = JSON.parse(localStorage.getItem('KYC-Data')) || {};
    const mergedData = {
      ...prevData,
      ...updatedFormData
    };

    localStorage.setItem('KYC-Data', JSON.stringify(mergedData));
  };


  const handlePassportChange = (e) => {
    const selected = e.target.files[0]
    if (selected) {
      setPassport(selected)
      console.log('file selected', selected);
    }
  }

  const handleFrontDocChange = (e) => {
    const selected = e.target.files[0]
    if (selected) {
      setFrontDoc(selected)
      console.log('file selected', selected);
    }
  }

  const handleBackDocChange = (e) => {
    const selected = e.target.files[0]
    if (selected) {
      setBackDoc(selected)
    }
  }

  useEffect(() => {
    const KYC_Data = JSON.parse(localStorage.getItem('KYC-Data'))
    setFormData(KYC_Data)
    console.log(forms);
  }, [])

  const VerifyDocument = async (e) => {
    e.preventDefault()

    setIsSubmitting(true);

    try {
      const token = localStorage.getItem('token')
      const storedForm = JSON.parse(localStorage.getItem('KYC-Data'))

      const formDatas = new FormData();

      Object.entries(storedForm).forEach(([key, value]) => {
        formDatas.append(key, value);
      });

      formDatas.append("passport", passport);
      formDatas.append("proof_of_address_document", forms);

      const kycRes = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/create-kyc`, {
        method: 'POST',
        headers: {
          Authorization: `Token ${token}`,
        },
        body: formDatas
      })

      const kycData = await kycRes.json();

      if (!kycRes.ok) throw new Error(kycData.message || 'KYC failed');

      console.log('KYC Added:', kycData);

      const walletRes = await fetch(`${process.env.REACT_APP_BACKEND_URL}/create-usdc-wallet`, {
        method: 'POST',
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      if (!walletRes.ok) throw new Error('Wallet creation failed');

      const customerRes = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/create-customer`, {
        method: 'POST',
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      if (!customerRes.ok) throw new Error('Customer creation failed');

      navigate('/home');
      setVerified(!verified);
      localStorage.setItem('userCreated', JSON.stringify('verified'));

    } catch (error) {
      console.error('Error during KYC:', error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <option value="PASSPORT">Passport</option>
            <option value="NATIONAL_ID">NIN</option>
          </select>
        </div>
        {formData.id_type === 'PASSPORT' || formData.id_type === '' ? (
          <div className='w-full'>
            <label htmlFor="passport">
              <div className='bg-[#eae2f6] cursor-pointer rounded-md h-[150px] border-2 border-black/50 flex items-center justify-center'>
                {passport ? (
                  <img
                    src={URL.createObjectURL(passport)}
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
                id="passport"
                onChange={handlePassportChange}
                hidden
              />
            </label>
            <p className='text-[#531CB3]'>Upload Passport</p>
          </div>
        ) : (
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
        )}
      </div>
      <div className='flex gap-2 mt-10'>
        <button
          className='p-3 rounded-lg w-[25%] text-[#525154] border-[1.5px] border-black/10'
          onClick={() => {
            navigate('/dashboard/verifyidentity')
            window.scrollTo(0, 0)
          }}
        >
          Previous
        </button>
        <button
          className={`p-[10px] px-4 rounded-lg text-white w-[80%] ${isSubmitting ? 'bg-[#E8E1F5]' : 'bg-[#531CB3]'}`}
          onClick={VerifyDocument}
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