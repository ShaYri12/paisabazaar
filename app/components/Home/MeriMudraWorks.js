import React from 'react'

const MeriMudraWorks = () => {
    return (
        <div className='max-w-[1200px] mx-auto w-full px-5'>
            <h2 className='mt-10 mb-14 text-center text-[20px] sm:text-[35px] text-[#232323] font-semibold '>How does meri mudra works ?</h2>
            <div className='mb-7 sm:mb-10 md:mb-[90px] flex items-start sm:flex-row flex-col gap-4'>
                <div className='w-full sm:w-1/2'>
                    <img src='/Complete-the-form.png' alt='image' className='m-auto h-[200px] sm:h-[250px] lg:h-[320px]' />
                </div>
                <div className='w-full sm:w-1/2 mt-3 sm:mt-10'>
                    <h1 className='text-[#222222] mb-3 sm:mb-5 text-[20px] sm:text-[28px] font-semibold text-center sm:text-left'>Complete the form</h1>
                    <p className='text-[#9b9b9b] text-[14px] sm:text-[20px] font-normal text-center sm:text-left sm:max-w-[450px]'>First we need to knowa little about you and your needs for loan.</p>
                </div>
            </div>
            <div className='mb-7 sm:mb-10 md:mb-[90px] flex items-start sm:flex-row flex-col-reverse gap-4'>
                <div className='w-full sm:w-1/2 mt-3 sm:mt-10'>
                    <h1 className='text-[#222222] mb-3 sm:mb-5 text-[20px] sm:text-[28px] font-semibold text-center sm:text-right'>Get Approval</h1>
                    <p className='text-[#9b9b9b]  text-[14px] sm:text-[20px] font-normal text-center sm:text-right'>You will within five working hours of submitting your application and get approved</p>
                </div>
                <div className='w-full sm:w-1/2'>
                    <img src='/Get-Approval.png' alt='image' className='m-auto h-[200px] sm:h-[250px] lg:h-[320px]' />
                </div>
            </div>
            <div className='mb-7 sm:mb-10 md:mb-[90px] flex items-start sm:flex-row flex-col gap-4'>
                <div className='w-full sm:w-1/2'>
                    <img src='/Secure-Your-Funds.png' alt='image' className='m-auto h-[200px] sm:h-[250px] lg:h-[320px]' />
                </div>
                <div className='w-full sm:w-1/2 mt-3 sm:mt-10'>
                    <h1 className='text-[#222222] mb-3 sm:mb-5 text-[20px] sm:text-[28px] font-semibold text-center sm:text-left'>Secure Your Funds</h1>
                    <p className='text-[#9b9b9b]  text-[14px] sm:text-[20px] font-normal sm:max-w-[450px] text-center sm:text-left'>After approved, we will can you to work out the details. We sent money within hours of approved.</p>
                </div>
            </div>

            <div className='flex items-center justify-center'>
                <button className='mb-[60px] bg-[#6cb540] hover:bg-[#509924] transition duration-300 w-[200px] h-[46px] rounded-[40px] text-white text-[16px] font-semibold'>Apply Now</button>
            </div>
        </div>
    )
}

export default MeriMudraWorks