import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeFrame from '../Components/Images/HomeFrame.png'
import FooterFrame from '../Components/Images/FooterFrame.png'
import Logo from '../Components/Images/LogoBase.png'
import USD from '../Components/Images/USD.png'
import USDC from '../Components/Images/USDC.png'
import plus from '../Components/Images/plus.png'
import Curerncy from '../Components/Images/Currency.png'
import BankAcct from '../Components/Images/Bank Account.png'
import arrow from '../Components/Images/arrow-right.svg'
import rocket from '../Components/Images/rocket.png';
import house from '../Components/Images/house.png';
import world from '../Components/Images/world.png';
import vector from '../Components/Images/Vector2.png';
import frame4 from '../Components/Images/frame4.png';
import frame5 from '../Components/Images/frame5.png';
import frame6 from '../Components/Images/Frame 82.png';
import a from '../Components/Images/1.png';
import b from '../Components/Images/2.png';
import c from '../Components/Images/3.png';
import d from '../Components/Images/4.png';
import e from '../Components/Images/5.png';
import f from '../Components/Images/6.png';
import svg5 from '../Components/Images/svg5.svg';
import logo from '../Components/Images/Logo base.png';
import Binance from '../Components/Images/Binance.png';
import chevron from '../Components/Images/chevron-right.png';
import binance from '../Components/Images/Binance.svg';
import Ampleforth from '../Components/Images/Ampleforth.svg';
import Chainlink from '../Components/Images/Chainlink.svg';
import Coinbase from '../Components/Images/Coinbase.svg';
import Kusama from '../Components/Images/Kusama.svg';
import Litecoin from '../Components/Images/Litecoin.svg';
import Tether from '../Components/Images/Tether.svg';
import Frame2 from '../Components/Images/Frame.svg';
import Ethereum from '../Components/Images/Ethereum.svg';
import control from '../Components/Images/control.png';
import Logo_base from '../Components/Images/Logo base.png';
import bank from '../Components/Images/bank2.png';
import person from '../Components/Images/person2.png';
import currency from '../Components/Images/currency2.png';
import hr from '../Components/Images/hr.png';
import world2 from '../Components/Images/world2.png';
import img from '../Components/Images/img.png';
import right from '../Components/Images/arrowright2.png';
import left from '../Components/Images/arrowleft.png';
import orangedollar from '../Components/Images/orangedollar.png';
import orangenote from '../Components/Images/orangenote.png';
import orangecircles from '../Components/Images/orangecircles.png';
import orangewallet from '../Components/Images/orangewallet.png';
import orangepuzzle from '../Components/Images/orangepuzzle.png';
import solanaLogoMark from '../Components/Images/solanaLogoMark 1.svg';
import { RiArrowRightSLine } from "react-icons/ri";
import { BiDollar } from "react-icons/bi";
import { LuGem } from "react-icons/lu";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <img
      className='cursor-pointer absolute size-10 top-[-38.5%] right-[60px] z-10'
      src={left}
      alt="Previous"
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <img
      className='cursor-pointer absolute size-10 top-[-38.5%] right-[0px] z-10'
      src={right}
      alt="Next"
      onClick={onClick}
    />
  );
};

const HomeRoot = () => {

  const [faq, setFaq] = useState(false)
  const [faq2, setFaq2] = useState(false)
  const [faq3, setFaq3] = useState(false)
  const [faq4, setFaq4] = useState(false)

  const handleFaq1 = () => {
    setFaq(!faq)
    setFaq2(false)
    setFaq3(false)
    setFaq4(false)
  }
  const handleFaq2 = () => {
    setFaq(false)
    setFaq2(!faq2)
    setFaq3(false)
    setFaq4(false)
  }
  const handleFaq3 = () => {
    setFaq(false)
    setFaq2(false)
    setFaq3(!faq3)
    setFaq4(false)
  }
  const handleFaq4 = () => {
    setFaq(false)
    setFaq2(false)
    setFaq3(false)
    setFaq4(!faq4)
  }

  const settings = {
    infinite: false,
    speed: 2000,
    slidesToShow: 3.5,
    slidesToScroll: 2,
    autoplaySpeed: 3000,
    waitForAnimate: false,
    pauseOnHover: false,
    centerMode: false,
    initialSlide: 0,
    // autoplay: true,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div>
      <div className='relative m-10'>
        <img className='rounded-[20px] h-[700px] w-full' src={HomeFrame} alt="" />
        <div className='absolute w-full top-0 text-white px-10 py-5'>
          <div className='flex justify-between items-center'>
            <a href="/">
              <div className='flex gap-2 items-center'>
                <img src={Logo} alt="" />
                <p className='text-xl font-medium'>reccur</p>
              </div>
            </a>
            <div className='flex gap-8 ml-24'>
              <a href="/steps">
                <p>How it Works</p>
              </a>
              <a href="/about">
                <p>About</p>
              </a>
              <a href="/pricing">
                <p>Pricing</p>
              </a>
              <a href="/support">
                <p>Support</p>
              </a>
            </div>
            <div className='flex gap-3'>
              <a href="/login">
                <button className='py-3 px-5 text-white'>Log in</button>
              </a>
              <a href="/signup">
                <button className='bg-[#531CB3] text-white py-3 px-5 rounded-[10px]'>
                  Get started
                </button>
              </a>
            </div>
          </div>
          <div className='flex justify-center items-center gap-6 mt-[100px]'>
            <img className='size-14' src={USD} alt="" />
            <img src={arrow} alt="" />
            <img className='size-14' src={BankAcct} alt="" />
            <img src={plus} alt="" />
            <img className='size-14' src={USDC} alt="" />
            <img src={arrow} alt="" />
            <img className='size-14' src={Curerncy} alt="" />
          </div>
          <div className='flex flex-col items-center mt-10 gap-7 text-center'>
            <h1 className='text-[36px] font-normal leading-[50px]'>Move your money freely <br /> across the globe.</h1>
            <p className='text-base font-normal text-[#E8E1F5]'>Send, receive, convert, and manage money globally. Whether you’re earning in <br /> crypto, freelancing worldwide, or just living globally.</p>
            <div className='flex gap-3'>
              <button className='bg-[#302F33] border-[#525154] border text-white flex gap-2 items-center justify-center py-2 px-[14px] rounded-lg'>
                View demo
              </button>
              <a href="/signup">
                <button className='bg-[#531CB3] text-white flex gap-2 items-center justify-center py-2 px-[14px] rounded-lg'>
                  Get started
                  <RiArrowRightSLine className='size-7' />
                </button>
              </a>
            </div>
          </div>
          <div className='text-[14px] font-normal text-center text-[#E8E1F5] justify-center mt-16 flex gap-8'>
            <div className='flex gap-2 items-center'>
              <img src={rocket} alt="" />
              <p>5-min setup</p>
            </div>
            <div className='flex gap-2 items-center'>
              <img src={house} alt="" />
              <p>Real accounts</p>
            </div>
            <div className='flex gap-2 items-center'>
              <img src={world} alt="" />
              <p>Use anywhere</p>
            </div>
          </div>
        </div>
      </div>

      <div className='m-10 py-[120px] px-5 flex flex-col gap-16'>
        <div className='flex justify-between'>
          <div>
            <p className='text-xs font-semibold uppercase'>for the Crypto Fam</p>
            <p className='text-[35px] font-thin leading-6 mt-6'>Already living that crypto life?</p>
            <p className='text-[35px] font-semibold'>This one’s for you.</p>
          </div>
          <div className='text-[#78757A] text-[11px] font-semibold flex gap-5'>
            <p className='uppercase'>For the Digital Hustlers</p>
            <p className='uppercase'>For the Global Squad</p>
          </div>
        </div>
        <div className='flex flex-wrap gap-4 justify-center'>
          <div className='xl:w-[32.2%] md:w-[48%] w-full'>
            <img src={vector} className='w-full' alt="" />
            <div className='py-[50px] px-5 bg-[#F9F7FC]'>
              <p className='text-[#302F33] text-[21px] mb-10 font-normal'>Fiat-to-crypto conversion</p>
              <div className='border-[1.5px] border-[#E6E4EB] shadow-[0_4px_16px_0_rgba(20,21,26,0.06)] rounded-[16px]'>
                <div className='flex relative'>
                  <div className='flex w-full items-center gap-3 p-4 py-[10px] border-r-[1.5px] border-b-[1.5px] border-[#E6E4EB]'>
                    <img src={frame4} className='size-7' alt="" />
                    <div className=''>
                      <p className='font-medium text-[14px] text-[#1D1C1F]'>Jane Smith</p>
                      <p className='text-[12px] text-[#78757A] font-normal'>you</p>
                    </div>
                  </div>
                  <div className='flex w-full items-center gap-3 p-4 py-[10px] border-b-[1.5px] border-[#E6E4EB]'>
                    <img src={frame5} className='size-7' alt="" />
                    <div className=''>
                      <p className='font-medium text-[14px] text-[#1D1C1F]'>USDT TRC 20</p>
                      <p className='text-[12px] text-[#78757A] font-normal'>crypto</p>
                    </div>
                  </div>
                  <img src={chevron} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' alt="" />
                </div>
                <div className='flex justify-between p-3'>
                  <div className='flex gap-2 items-center'>
                    <img className='w-[20px]' src={svg5} alt="" />
                    <p className='text-[14px] font-normal text-[#525154]'>Bank of America</p>
                  </div>
                  <p className='bg-[#FEEDED] py-[1px] px-[6px] text-[#DC2626] rounded-full'>1,200.00 USD</p>
                </div>
              </div>
              <div className='relative'>
                <div className="w-[1.5px] h-[110px] mx-auto [background-image:repeating-linear-gradient(to_bottom,#E6E4EB_0px,#E6E4EB_4px,transparent_4px,transparent_10px)]" />
                <img src={logo} className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2' alt="" />
              </div>
              <div className='flex justify-between border-[1.5px] border-[#E6E4EB] shadow-[0_4px_16px_0_rgba(20,21,26,0.06)] rounded-2xl p-4 items-center self-stretch'>
                <div className='flex gap-2 items-center'>
                  <img src={Binance} alt="" />
                  <p className='text-[16px] text-[#525154] font-normal'>New deposit made!</p>
                </div>
                <p className='bg-[#CFF9DE] py-[1px] px-[6px] text-[#159443] rounded-full'>1,200 USDT</p>
              </div>
              <img src={frame6} className='w-full' alt="" />
              <p className='text-[16px] font-normal text-[#525154] mt-9'>Convert your local currency into crypto and transfer it to your wallet instantly.</p>
            </div>
          </div>

          <div className='xl:w-[32.2%] md:w-[48%] w-full'>
            <img src={vector} className='w-full' alt="" />
            <div className='py-[50px] bg-[#F9F7FC]'>
              <p className='text-[#302F33] text-[21px] px-5 font-normal'>Ready for Web3</p>
              <div className='flex flex-col mt-20 gap-'>
                <div className='flex flex-col relative mx-auto'>
                  <div className='flex justify-center'>
                    <img className='mf:w-full w-[25%]' src={binance} alt="" />
                    <img className='mf:w-full w-[25%]' src={Chainlink} alt="" />
                    <img className='mf:w-full w-[25%]' src={Ethereum} alt="" />
                    <img className='mf:w-full w-[25%]' src={Kusama} alt="" />
                  </div>
                  <div className='flex items-center justify-center gap-5'>
                    <img className='mf:w-full w-[25%]' src={Frame2} alt="" />
                    <img className='mf:w-full w-[17%]' src={Logo_base} alt="" />
                    <img className='mf:w-full w-[25%]' src={Ampleforth} alt="" />
                  </div>
                  <div className='flex justify-center'>
                    <img className='mf:w-full w-[25%]' src={Coinbase} alt="" />
                    <img className='mf:w-full w-[25%]' src={Litecoin} alt="" />
                    <img className='mf:w-full w-[25%]' src={solanaLogoMark} alt="" />
                    <img className='mf:w-full w-[25%]' src={Tether} alt="" />
                  </div>
                </div>
                <p className='text-[16px] font-normal px-5 text-[#525154] mt-10'>Your bridge to DeFi, NFTs, or whatever's next. No more payment provider headaches.</p>
              </div>
            </div>
          </div>

          <div className='xl:w-[32.2%] md:w-[48%] w-full'>
            <img src={vector} className='w-full' alt="" />
            <div className='py-[50px] px-5 bg-[#F9F7FC]'>
              <p className='text-[#302F33] text-[21px] font-normal'>Full Control</p>
              <div className='flex flex-col mt-14'>
                <img src={control} className='mx-auto' alt="" />
                <p className='text-[16px] font-normal text-[#525154] 2xl:mt-5 mt-[75px]'>Your keys, your coins. Move funds anywhere, anytime. No permissions needed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#FEEDED] py-[100px] px-16 gap-16 flex flex-col'>
        <div className='flex justify-between'>
          <div>
            <p className='text-xs font-semibold uppercase text-[#DC2626]'>For the Digital Hustlers</p>
            <p className='text-[35px] font-thin leading-6 mt-6 text-[#302F33]'>Making money online?</p>
            <p className='text-[35px] font-semibold text-[#DC2626]'>Make getting paid easier.</p>
          </div>
          <div className='text-[#78757A] text-[11px] font-semibold flex gap-5'>
            <p className='uppercase'>For the Global Squad</p>
            <p className='uppercase'>for the Crypto Fam</p>
          </div>
        </div>
        <div className='flex gap-5 justify-center flex-wrap'>
          <img src={a} className='lg:w-[30%] sa:w-[40%] w-full' alt="" />
          <img src={b} className='lg:w-[30%] sa:w-[40%] w-full' alt="" />
          <img src={c} className='lg:w-[30%] sa:w-[40%] w-full' alt="" />
        </div>
      </div>

      <div className='bg-[#E8E1F5] py-[100px] px-16 gap-16 flex flex-col'>
        <div className='flex justify-between'>
          <div>
            <p className='text-xs font-semibold uppercase text-[#431594]'>For the Global Squad</p>
            <p className='text-[35px] font-thin leading-6 mt-6 text-[#302F33]'>Getting money from abroad?</p>
            <p className='text-[35px] font-semibold text-[#431594]'>Skip the bank fees.</p>
          </div>
          <div className='text-[#78757A] text-[11px] font-semibold flex gap-5'>
            <p className='uppercase'>for the Crypto Fam</p>
            <p className='uppercase'>For the Digital Hustlers</p>
          </div>
        </div>
        <div className='flex gap-5 justify-center flex-wrap'>
          <img src={d} className='lg:w-[30%] sa:w-[40%] w-full' alt="" />
          <img src={e} className='lg:w-[30%] sa:w-[40%] w-full' alt="" />
          <img src={f} className='lg:w-[30%] sa:w-[40%] w-full' alt="" />
        </div>
      </div>

      <div className='py-24 px-10'>
        <div className='flex gap-[300px] px-10 pb-20'>
          <div>
            <h1 className='text-[#1D1C1F] font-semibold text-[30px]'>How it actually works</h1>
            <p className='text-[#525154] font-normal text-[16px] mt-3'>Your guide to getting paid globally 🌍</p>
            <a href="/">
              <button className='bg-[#531CB3] mt-7 text-white flex gap-2 items-center justify-center py-2 px-[14px] rounded-lg'>
                Learn more
                <RiArrowRightSLine className='size-7' />
              </button>
            </a>
          </div>
          <div className='flex flex-col gap-16 relative mx-auto'>
            <img src={hr} className='absolute top-[50px] left-5' alt="" />
            <img src={hr} className='absolute top-[160px] left-5' alt="" />
            <div className='flex items-start gap-8'>
              <img src={person} alt="" />
              <div>
                <p className='text-[18px] font-medium text-[#302F33]'>Quick sign up</p>
                <p className='text-[14px] font-normal text-[#78757A]'>Basic ID verification. Done in 5.</p>
              </div>
            </div>
            <div className='flex items-start gap-8'>
              <img src={bank} alt="" />
              <div>
                <p className='text-[18px] font-medium text-[#302F33]'>Open your next account in a tap</p>
                <p className='text-[14px] font-normal text-[#78757A]'>Select from multiple currencies, start receiving or sending money!</p>
              </div>
            </div>
            <div className='flex items-start gap-8'>
              <img src={currency} alt="" />
              <div>
                <p className='text-[18px] font-medium text-[#302F33]'>Money hits different</p>
                <p className='text-[14px] font-normal text-[#78757A]'>Transfer, swap and convert all you like! No limits!</p>
              </div>
            </div>
          </div>
        </div>
        <hr className='text-[#E6E4EB]' />
        <div className='pt-20 px-8'>
          <div>
            <p className='text-xs font-semibold uppercase text-[#431594]'>The reccur advantage</p>
            <p className='text-[35px] font-semibold leading-6 mt-6 text-[#302F33]'>Why Reccur though?</p>
          </div>
          <div className='flex justify-between gap-5 mt-20'>
            <div className='flex flex-col gap-8'>
              <BiDollar className='size-5' />
              <p className='text-[18px] font-normal text-[#302F33]'>Bill in USD, Withdraw in NGN.</p>
              <p className='text-[15px] font-normal text-[#525154]'>We help you get paid globally and spend locally. No stress or middlemen!</p>
            </div>
            <div className='flex flex-col items-start gap-8'>
              <img src={world2} className='size-5' alt="" />
              <p className='text-[18px] font-normal text-[#302F33]'>Work worldwide, bank locally.</p>
              <p className='text-[15px] font-normal text-[#525154]'>Open virtual accounts in the currencies you earn in, and send money home instantly.</p>
            </div>
            <div className='flex flex-col gap-8'>
              <LuGem className='size-5' />
              <p className='text-[18px] font-normal text-[#302F33]'>All your money, one place.</p>
              <p className='text-[15px] font-normal text-[#525154]'>Whether you’re invoicing, converting, or withdrawing, Worry less, we handle the flow.</p>
            </div>
            <div className='flex flex-col items-start gap-8'>
              <img src={img} className='size-5' alt="" />
              <p className='text-[18px] font-normal text-[#302F33]'>Convert in real time.</p>
              <p className='text-[15px] font-normal text-[#525154]'>Get transparent rates and convert instantly between currencies—on your terms.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='py-24 px-10 bg-[#431594] text-white text-center flex flex-col gap-2'>
        <p className='text-[32px] font-semibold'>Real talk FAQ</p>
        <p className='text-[#E8E1F5] font-normal'>Learn more at our Support page or send an email to <a className='underline' href="/" target="_blank" rel="noopener noreferrer">help@reccur.co.</a></p>
        <div className='flex flex-col gap-3 mt-16 w-[720px] mx-auto text-start'>
          <div
            onClick={handleFaq1}
            className={`flex cursor-pointer justify-between items-start rounded-[16px] p-8 ${faq && 'bg-[#531CB3]'}`}
          >
            <div>
              <p className='text-[16px] font-medium text-[#F9F7FC]'>"Crypto? Sounds Complex..."</p>
              {faq && <p className='text-[14px] font-normal text-[#D2D0D6]'>Nah. If you can use Opay or Cash App, you can use this. We handle the tech.</p>}
            </div>
            {faq ? <FaArrowUp /> : <FaArrowDown />}

          </div>
          <div
            onClick={handleFaq2}
            className={`flex cursor-pointer justify-between items-start rounded-[16px] p-8 ${faq2 && 'bg-[#531CB3]'}`}
          >
            <div>
              <p className='text-[16px] font-medium text-[#F9F7FC]'>"But Is It Safe Though?"</p>
              {faq2 && <p className='text-[14px] font-normal text-[#D2D0D6]'>Nah. If you can use Opay or Cash App, you can use this. We handle the tech.</p>}
            </div>
            {faq2 ? <FaArrowUp /> : <FaArrowDown />}
          </div>
          <div
            onClick={handleFaq3}
            className={`flex cursor-pointer justify-between items-start rounded-[16px] p-8 ${faq3 && 'bg-[#531CB3]'}`}
          >
            <div>
              <p className='text-[16px] font-medium text-[#F9F7FC]'>"What's The Catch?"</p>
              {faq3 && <p className='text-[14px] font-normal text-[#D2D0D6]'>Nah. If you can use Opay or Cash App, you can use this. We handle the tech.</p>}
            </div>
            {faq3 ? <FaArrowUp /> : <FaArrowDown />}
          </div>
          <div
            onClick={handleFaq4}
            className={`flex cursor-pointer justify-between items-start rounded-[16px] p-8 ${faq4 && 'bg-[#531CB3]'}`}
          >
            <div>
              <p className='text-[16px] font-medium text-[#F9F7FC]'>"Can I Start Today?"</p>
              {faq4 && <p className='text-[14px] font-normal text-[#D2D0D6]'>Nah. If you can use Opay or Cash App, you can use this. We handle the tech.</p>}
            </div>
            {faq4 ? <FaArrowUp /> : <FaArrowDown />}
          </div>
        </div>
      </div>

      <div className='py-[100px] px-10 gap-16 flex flex-col'>
        <div className='px-10'>
          <div className='flex justify-between items-end'>
            <div>
              <p className='text-xs font-semibold uppercase text-[#D97706]'>power user features</p>
              <p className='text-[35px] font-thin leading-6 mt-6 text-[#302F33]'>For the ones who want extra,</p>
              <p className='text-[35px] font-semibold text-[#D97706]'>here’s what we have coming up soon</p>
            </div>
          </div>
          <Slider {...settings} className='mt-16'>
            <div className='flex flex-col gap-5 p-10 rounded-[24px] border-[1.3px] border-[#E6E4EB] items-start'>
              <img src={orangedollar} alt="" />
              <p className='text-[18px] text-[#302F33] mt-5 font-normal'>Direct USDC settlement</p>
              <p className='text-[15px] text-[#525154] mt-5 font-normal'>Skip the jumping through multiple apps to convert your money to crypto, just receive directly to your wallet.</p>
            </div>
            <div className='flex flex-col gap-5 p-10 rounded-[24px] border-[1.3px] border-[#E6E4EB] items-start'>
              <div className='flex justify-between items-center w-full'>
                <img src={orangenote} alt="" />
                <p className='bg-[#FEEDB8] text-[#D97706] py-1 px-[6px] rounded-[8px]'>Coming soon</p>
              </div>
              <p className='text-[18px] text-[#302F33] mt-3 font-normal'>Smart contract compatible</p>
              <p className='text-[15px] text-[#525154] mt-5 font-normal'>We’re building a future where you will be able to move your money out in USDC, ETH and other smart contract chains.</p>
            </div>
            <div className='flex flex-col gap-5 p-10 rounded-[24px] border-[1.3px] border-[#E6E4EB] items-start'>
              <div className='flex justify-between items-center w-full'>
                <img src={orangecircles} alt="" />
                <p className='bg-[#FEEDB8] text-[#D97706] py-1 px-[6px] rounded-[8px]'>Coming soon</p>
              </div>
              <p className='text-[18px] text-[#302F33] mt-3 font-normal'>Multi-chain support</p>
              <p className='text-[15px] text-[#525154] mt-5 font-normal'>Very soon you will not have to worry about the chain because you can jump between chains without thinking, for free</p>
            </div>
            <div className='flex flex-col gap-5 p-10 rounded-[24px] border-[1.3px] border-[#E6E4EB] items-start'>
              <div className='flex justify-between items-center w-full'>
                <img src={orangewallet} alt="" />
              </div>
              <p className='text-[18px] text-[#302F33] mt-5 font-normal'>Custom wallet integration</p>
              <p className='text-[15px] text-[#525154] mt-5 font-normal'>With Reccur you’re given a wallet at the same time you can withdraw it out to any Base wallet of your choice.</p>
            </div>
            <div className='flex flex-col gap-5 p-10 rounded-[24px] border-[1.3px] border-[#E6E4EB] items-start'>
              <div className='flex justify-between items-center w-full'>
                <img src={orangepuzzle} alt="" />
                <p className='bg-[#FEEDB8] text-[#D97706] py-1 px-[6px] rounded-[8px]'>Coming soon</p>
              </div>
              <p className='text-[18px] text-[#302F33] mt-3 font-normal'>API access</p>
              <p className='text-[15px] text-[#525154] mt-5 font-normal'>If you’re a develop and you’d like to offer your users this feature, we’ve got you in mind and very soon you will be able to.</p>
            </div>
          </Slider>
        </div>
      </div>

      <div className='relative'>
        <img src={FooterFrame} className='w-full h-[1200px]' alt="" />
        <div className='absolute w-full text-white top-24'>
          <div className='w-[400px] text-center flex flex-col items-center mx-auto'>
            <p className='text-[35px] font-bold'>Ready to level up your money game?</p>
            <p className='text-[16px] text-[#D2D0D6]'>5 minutes to setup. No hidden fees. No crypto knowledge needed.</p>
            <a href="/signup">
              <button className='bg-[#531CB3] mx-auto mt-10 text-white flex gap-3 items-center justify-center py-3 px-5 rounded-lg'>
                Get Your US Account
                <img src={arrow} alt="" />
              </button>
            </a>
          </div>
          <hr className='text-[#525154] mt-20 mx-10' />
          <div className='px-20 pt-20 grid grid-cols-3 gap-[120px]'>
            <div className='text-[#B5B3BA] text-[16px] font-normal'>
              <img src={Logo} alt="" />
              <p className='mt-3'>Reccur is doing X, Y and Z. The idea is that we are all going to make and if we are not making it, then that would be for sure a shame.</p>
              <p className='mt-3'>© Grey Inc. 2024.</p>
            </div>
            <div className='col-span-2 grid grid-cols-4'>
              <div className='flex flex-col gap-5'>
                <p className='text-[12px] uppercase font-semibold'>Lifestyle</p>
                <p className='text-[16px] text-[#E6E4EB] font-normal'>Crypto fam</p>
                <p className='text-[16px] text-[#E6E4EB] font-normal'>Digital hustlers</p>
                <p className='text-[16px] text-[#E6E4EB] font-normal'>Global users</p>
                <p className='text-[16px] text-[#E6E4EB] font-normal'>Power users</p>
              </div>
              <div className='flex flex-col gap-5'>
                <p className='text-[12px] uppercase font-semibold'>General</p>
                <p className='text-[16px] text-[#E6E4EB] font-normal'>Home</p>
                <p className='text-[16px] text-[#E6E4EB] font-normal'>How it works</p>
                <p className='text-[16px] text-[#E6E4EB] font-normal'>About us</p>
                <p className='text-[16px] text-[#E6E4EB] font-normal'>Careers</p>
              </div>
              <div className='flex flex-col gap-5'>
                <p className='text-[12px] uppercase font-semibold'>Legal</p>
                <p className='text-[16px] text-[#E6E4EB] font-normal'>Privacy policy</p>
                <p className='text-[16px] text-[#E6E4EB] font-normal'>Terms of service</p>
                <p className='text-[16px] text-[#E6E4EB] font-normal'>Support</p>
                <p className='text-[16px] text-[#E6E4EB] font-normal'>Contact</p>
              </div>
              <div className='flex flex-col gap-5'>
                <p className='text-[12px] uppercase font-semibold'>Social</p>
                <p className='text-[16px] text-[#E6E4EB] font-normal'>LinkedIn</p>
                <p className='text-[16px] text-[#E6E4EB] font-normal'>X</p>
              </div>
            </div>
          </div>
          <hr className='text-[#525154] mt-20 mx-10' />
          <p className='p-20 text-[16px] text-[#F3F0F7] font-normal'>This is some important spill about how we are delivering Reccur. This is normally included on websites that have a little more explaining to do or provide additional context for the services that they provide. </p>
          <p className='text-[145px] text-center bg-gradient-to-b from-white/30 to-black/80 bg-clip-text text-transparent font-bold'>try reccur today!</p>
        </div>
      </div>
    </div>
  )
}

export default HomeRoot