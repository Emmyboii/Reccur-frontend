import React, { useState } from 'react'
import OffToggle from '../Components/Images/OffToggle.png';
import OnToggle from '../Components/Images/OnToggle.png';

const NotificationSettings = (props) => {
    const { TransactionType } = props

    const [toggleCredited1, setToggleCredited1] = useState(false)
    const [toggleCredited2, setToggleCredited2] = useState(false)
    const [toggleDebited1, setToggleDebited1] = useState(false)
    const [toggleDebited2, setToggleDebited2] = useState(false)
    const [toggleAnotherNotification1, setToggleAnotherNotification1] = useState(false)
    const [toggleAnotherNotification2, setToggleAnotherNotification2] = useState(false)
    const [toggleNewNotification1, setToggleNewNotification1] = useState(false)
    const [toggleNewNotification2, setToggleNewNotification2] = useState(false)
    const [toggleNotificationFromReccur, setToggleNotificationFromReccur] = useState(false)

    return (
        <div className={TransactionType === 'Notifications' ? 'flex flex-col gap-10 w-[848px]' : 'hidden'}>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-1'>
                    <p className='text-[18px] font-medium text-[#1D1C1F]'>Notification settings</p>
                    <p className='text-[14px] font-normal text-[#525154]'>Choose how and where you would like us to notify you.</p>
                </div>
                <button className='text-[#531CB3] text-[14px] font-medium bg-[#E8E1F5] px-4 py-[10px] rounded-lg'>Save changes</button>
            </div>
            <div className='flex gap-5'>
                <div className='w-[30%] flex flex-col gap-1'>
                    <div className='text-[14px] font-medium text-[#1D1C1F] flex items-center gap-1'>
                        <p>Notifications</p>
                    </div>
                    <p className='text-[14px] font-normal text-[#525154]'>
                        We will still send you important updates about your account outside of your notification settinfs.
                    </p>
                </div>
                <div className='flex flex-col rounded-lg border text-[#1D1C1F] text-[14px] font-normal border-[#F3F0F7] justify-between w-[60%]'>
                    <div className='flex gap-[70px] p-4 border-b border-b-[#F3F0F7]'>
                        <p className='flex-1'>Notifications</p>
                        <p>Email</p>
                        <p>In-app</p>
                    </div>
                    <div className='flex gap-[70px] p-4 border-b border-b-[#F3F0F7]'>
                        <p className='flex-1'>When your account is credited</p>
                        {toggleCredited1 ? (
                            <img
                                className='cursor-pointer'
                                src={OnToggle}
                                alt=""
                                onClick={() => setToggleCredited1(false)}
                            />

                        ) : (
                            <img
                                className='cursor-pointer'
                                src={OffToggle}
                                alt=""
                                onClick={() => setToggleCredited1(true)}
                            />
                        )}
                        {toggleCredited2 ? (
                            <img
                                className='cursor-pointer'
                                src={OnToggle}
                                alt=""
                                onClick={() => setToggleCredited2(false)}
                            />

                        ) : (
                            <img
                                className='cursor-pointer'
                                src={OffToggle}
                                alt=""
                                onClick={() => setToggleCredited2(true)}
                            />
                        )}
                    </div>
                    <div className='flex gap-[70px] p-4 border-b border-b-[#F3F0F7]'>
                        <p className='flex-1'>When your account is debited</p>
                        {toggleDebited1 ? (
                            <img
                                className='cursor-pointer'
                                src={OnToggle}
                                alt=""
                                onClick={() => setToggleDebited1(false)}
                            />
                        ) : (
                            <img
                                className='cursor-pointer'
                                src={OffToggle}
                                alt=""
                                onClick={() => setToggleDebited1(true)}
                            />
                        )}
                        {toggleDebited2 ? (
                            <img
                                className='cursor-pointer'
                                src={OnToggle}
                                alt=""
                                onClick={() => setToggleDebited2(false)}
                            />
                        ) : (
                            <img
                                className='cursor-pointer'
                                src={OffToggle}
                                alt=""
                                onClick={() => setToggleDebited2(true)}
                            />
                        )}
                    </div>
                    <div className='flex gap-[70px] p-4 border-b border-b-[#F3F0F7]'>
                        <p className='flex-1'>Another notification</p>
                        {toggleAnotherNotification1 ? (
                            <img
                                className='cursor-pointer'
                                src={OnToggle}
                                alt=""
                                onClick={() => setToggleAnotherNotification1(false)}
                            />
                        ) : (
                            <img
                                className='cursor-pointer'
                                src={OffToggle}
                                alt=""
                                onClick={() => setToggleAnotherNotification1(true)}
                            />
                        )}
                        {toggleAnotherNotification2 ? (
                            <img
                                className='cursor-pointer'
                                src={OnToggle}
                                alt=""
                                onClick={() => setToggleAnotherNotification2(false)}
                            />
                        ) : (
                            <img
                                className='cursor-pointer'
                                src={OffToggle}
                                alt=""
                                onClick={() => setToggleAnotherNotification2(true)}
                            />
                        )}
                    </div>
                    <div className='flex gap-[70px] p-4 border-b border-b-[#F3F0F7]'>
                        <p className='flex-1'>New notification setting</p>
                        {toggleNewNotification1 ? (
                            <img
                                className='cursor-pointer'
                                src={OnToggle}
                                alt=""
                                onClick={() => setToggleNewNotification1(false)}
                            />
                        ) : (
                            <img
                                className='cursor-pointer'
                                src={OffToggle}
                                alt=""
                                onClick={() => setToggleNewNotification1(true)}
                            />
                        )}
                        {toggleNewNotification2 ? (
                            <img
                                className='cursor-pointer'
                                src={OnToggle}
                                alt=""
                                onClick={() => setToggleNewNotification2(false)}
                            />
                        ) : (
                            <img
                                className='cursor-pointer'
                                src={OffToggle}
                                alt=""
                                onClick={() => setToggleNewNotification2(true)}
                            />
                        )}
                    </div>
                    <div className='flex gap-[70px] p-4 border-b border-b-[#F3F0F7]'>
                        <p className='flex-1'>Notifications from reccur</p>
                        {toggleNotificationFromReccur ? (
                            <img
                                className='cursor-pointer'
                                src={OnToggle}
                                alt=""
                                onClick={() => setToggleNotificationFromReccur(false)}
                            />

                        ) : (
                            <img
                                className='cursor-pointer'
                                src={OffToggle}
                                alt=""
                                onClick={() => setToggleNotificationFromReccur(true)}
                            />
                        )}
                        {toggleDebited1 ? (
                            <img
                                className='cursor-pointer invisible'
                                src={OnToggle}
                                alt=""
                                onClick={() => setToggleDebited1(false)}
                            />

                        ) : (
                            <img
                                className='cursor-pointer invisible'
                                src={OffToggle}
                                alt=""
                                onClick={() => setToggleDebited1(true)}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotificationSettings