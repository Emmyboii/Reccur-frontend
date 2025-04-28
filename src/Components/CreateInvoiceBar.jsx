import React, { useContext, useState } from 'react'
import { Context } from '../Context/Context'
import close from '../Components/Images/x-close.png';
import Date from '../Components/Images/date.png';
import OffToggle from '../Components/Images/OffToggle.png';
import OnToggle from '../Components/Images/OnToggle.png';
import add from '../Components/Images/add.png';

const CreateInvoiceBar = () => {

    const { handleCreateInvoice, createInvoice, handleAddedInvoice } = useContext(Context)


    const [addItem, setAddItem] = useState([
        {
            ItemName: 'Item Name',
            Quantity: 'Quantity',
            UnitPrice: 'Unit Price',
            Amount: 'Amount',
            toggle: false,
        }
    ])

    const handleAddItem = () => {
        setAddItem(prev => [
            ...prev,
            {
                ItemName: 'Item Name',
                Quantity: 'Quantity',
                UnitPrice: 'Unit Price',
                Amount: 'Amount',
                toggle: false,
            }
        ])
    }

    const handleToggle = (index) => {
        setAddItem(prev =>
            prev.map((item, i) =>
                i === index ? { ...item, toggle: !item.toggle } : item
            )
        );
    };

    return (
        <div className={`fixed top-0 h-screen bg-white lg:p-10 py-8 px-4 duration-700 text-black z-50 overflow-auto ${createInvoice ? 'sm:w-[40%] w-full right-0' : 'right-[-100%] w-[40%]'}`}>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-[20px] font-medium'>Create invoice</h1>
                    <p className='text-[14px] text-[#525154] font-normal'>Create and send invoices effortlessly to get paid on time.</p>
                </div>
                <img
                    className='size-5 mt-1 cursor-pointer' src={close} alt=""
                    onClick={handleCreateInvoice}
                />
            </div>
            <div className='mt-7 text-black/60'>
                <div className='mt-5'>
                    <label className='text-[#525154] text-[14px]' htmlFor="fullName">Payer's name</label>
                    <div className='flex items-center'>
                        <input
                            className='border-[1.5px] border-[#D2D0D6] mt-[6px] outline-none py-[10px] px-[14px] w-full rounded-md'
                            type="text"
                            name=""
                            id=""
                            placeholder='Payer’s name'
                        />
                    </div>
                </div>
                <div className='mt-5'>
                    <label className='text-[#525154] text-[14px]' htmlFor="fullName">Payer's mail</label>
                    <div className='flex items-center'>
                        <input
                            className='border-[1.5px] border-[#D2D0D6] mt-[6px] outline-none py-[10px] px-[14px] w-full rounded-md'
                            type="text"
                            name=""
                            id=""
                            placeholder='Payer’s mail'
                        />
                    </div>
                </div>
                <div className='mt-5'>
                    <label className='text-[#525154] text-[14px]' htmlFor="fullName">Due date</label>
                    <div className='flex items-center relative'>
                        <input
                            className='border-[1.5px] border-[#D2D0D6] mt-[6px] outline-none py-[10px] w-full pl-[42px] rounded-md'
                            type="text"
                            name=""
                            id=""
                            placeholder='Select date'
                        />
                        <img className='absolute ml-3 mt-1 size-5' src={Date} alt="" />
                    </div>
                </div>
                {addItem.map((item, index) => (
                    <div key={index} className='p-6 rounded-lg border border-[#F3F0F7] flex flex-col gap-6 mt-5'>
                        <div>
                            <label className='text-[#525154] text-[14px]' htmlFor="itemName">{item.ItemName}</label>
                            <div className='flex items-center'>
                                <input
                                    className='border-[1.5px] border-[#D2D0D6] mt-[6px] outline-none py-[10px] px-[14px] w-full rounded-md'
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder='Invoice item name'
                                />
                            </div>
                        </div>
                        {item.toggle ? (
                            <div className='flex gap-4'>
                                <div className='w-full'>
                                    <label className='text-[#525154] text-[14px]' htmlFor="itemName">{item.Quantity}</label>
                                    <div className='flex items-center'>
                                        <input
                                            className='border-[1.5px] border-[#D2D0D6] mt-[6px] outline-none py-[10px] px-[14px] w-full rounded-md'
                                            type="number"
                                            name=""
                                            id=""
                                            placeholder='Quantity'
                                        />
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <label className='text-[#525154] text-[14px]' htmlFor="itemName">{item.UnitPrice}</label>
                                    <div className='flex items-center relative'>
                                        <input
                                            className='border-[1.5px] border-[#D2D0D6] mt-[6px] outline-none py-[10px] pl-8 w-full rounded-lg'
                                            type="number"
                                            name=""
                                            id=""
                                            placeholder='Unit Price'
                                        />
                                        <p className='absolute ml-3 mt-[7px] text-[#78757A] text-[16px]'>$</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className='hidden'></div>
                        )}
                        <div>
                            <label className='text-[#525154] text-[14px]' htmlFor="fullName">{item.Amount}</label>
                            <div className='flex items-center w-full relative'>
                                <input
                                    className='border-[1.5px] border-[#D2D0D6] mt-[6px] outline-none py-[10px] pl-8 w-full rounded-lg'
                                    type="number"
                                    name=""
                                    id=""
                                    placeholder='Amount'
                                />
                                <p className='absolute ml-3 text-[#78757A] mt-[7px] text-[16px]'>$</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img
                                onClick={() => handleToggle(index)}
                                src={item.toggle ? OnToggle : OffToggle}
                                alt=""
                                className="cursor-pointer"
                            />
                            <p onClick={() => handleToggle(index)} className='cursor-pointer'>Use quantity and unit price for item</p>
                        </div>
                    </div>
                ))}
                <div
                    onClick={handleAddItem}
                    className='text-[#531CB3] cursor-pointer flex items-center gap-2 mt-5 justify-center'
                >
                    <img src={add} alt="" />
                    <p className='font-medium'>Add new item</p>
                </div>
                <div className='mt-10'>
                    <p className='text-[#525154] text-[14px]'>Invoice note</p>
                    <textarea
                        name=""
                        id=""
                        className='w-full resize-none h-[135px] outline-none mt-[6px] rounded-lg border-[1.5px] border-[#D2D0D6] py-[10px] px-[14px]'
                    ></textarea>
                </div>

                <div className='mt-10'>
                    <p className='text-[#1D1C1F] text-[20px]'>SubTotal: $0.00</p>
                </div>
                <div className='flex gap-3 mt-10'>
                    <button
                        className='p-3 rounded-lg w-[25%] border-[1.5px] border-black/10'
                        onClick={handleCreateInvoice}
                    >
                        Cancel
                    </button>
                    <button
                        className='p-3 rounded-lg bg-[#531CB3] text-white w-[80%]'
                        onClick={() => {
                            window.scrollTo(0, 0)
                            handleCreateInvoice()
                            handleAddedInvoice()
                        }}
                    >
                        Create Invoice
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateInvoiceBar