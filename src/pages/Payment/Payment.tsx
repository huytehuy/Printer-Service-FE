import { Box, Button, FileInput, Grid, NativeSelect, Image } from '@mantine/core';
import { IconFileCv } from '@tabler/icons-react';
import { IconSquareRoundedArrowUpFilled } from '@tabler/icons-react';
import image from '../../assets/image_print.jpeg'
function MonitorPage() {
  const icon = <IconSquareRoundedArrowUpFilled/>;

  return (
    <>
    <Box className='h-full flex justify-between'>
      <div className='flex px-4 py-1'>
        <div>logo</div>
        <div className='flex mx-10'>
          <div className='mx-3'>Printer</div>
          <div className='mx-3'>Payment</div>
          <div className='mx-3'>Account</div>
        </div>
      </div>
      <div className='flex px-4 py-1'>
        <div className='mx-3'>$: 100</div>
        <div className='mx-3'>PR: 100</div>
        <div>Avatar</div>
      </div>
    </Box>
    <Box className='bg-[#ECECEC] flex justify-center h-screen'>
      <Box className='w-5/6 bg-white flex items-center flex-col'>
        <div className='flex justify-center'>Select Pack</div>
        <div className='flex justify-around w-full'>
        <div className='border-[#5EB696] border-1 border-solid h-25 w-80 flex justify-center items-center gap-4 rounded-md'>
          <div>10 Sheets</div>
          <div className='border-[#5EB696] border-1 border-solid w-20 h-10 flex justify-center items-center'>10$</div>
        </div>
        <div className='border-[#5EB696] border-1 border-solid h-25 w-80 flex justify-center items-center gap-4 rounded-md'>
          <div>10 Sheets</div>
          <div className='border-[#5EB696] border-1 border-solid w-20 h-10 flex justify-center items-center'>10$</div>
        </div>
        </div>
        <div className='flex justify-around w-full'>
        <div className='border-[#5EB696] border-1 border-solid h-25 w-80 flex justify-center items-center gap-4 rounded-md'>
          <div>10 Sheets</div>
          <div className='border-[#5EB696] border-1 border-solid w-20 h-10 flex justify-center items-center'>10$</div>
        </div>
        <div className='border-[#5EB696] border-1 border-solid h-25 w-80 flex justify-center items-center gap-4 rounded-md'>
          <div>10 Sheets</div>
          <div className='border-[#5EB696] border-1 border-solid w-20 h-10 flex justify-center items-center'>10$</div>
        </div>
        </div>
        <div className='flex justify-around w-full'>
        <div className='border-[#5EB696] border-1 border-solid h-25 w-80 flex justify-center items-center gap-4 rounded-md'>
          <div>10 Sheets</div>
          <div className='border-[#5EB696] border-1 border-solid w-20 h-10 flex justify-center items-center'>10$</div>
        </div>
        <div className='border-[#5EB696] border-1 border-solid h-25 w-80 flex justify-center items-center gap-4 rounded-md'>
          <div>10 Sheets</div>
          <div className='border-[#5EB696] border-1 border-solid w-20 h-10 flex justify-center items-center'>10$</div>
        </div>
        </div>

      </Box>
    </Box>
    </>
  );
}

export default MonitorPage;
