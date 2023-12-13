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
      <Grid>
      <Grid.Col span={6} className='p-10 h-full'>
        <Box>
        <FileInput
        // leftSection={icon}
        label="Upload your File"
        placeholder="Your File"
        // leftSectionPointerEvents="none"
      />
      <NativeSelect label="Destination" data={['Destination', 'Angular', 'Vue']} />
      <NativeSelect label="Pages" data={['1', 'Angular', 'Vue']} />
      <NativeSelect label="Layout" data={['Landscape', 'Angular', 'Vue']} />
      <NativeSelect label="Paper size" data={['A4', 'Angular', 'Vue']} />
      <NativeSelect label="Pages per sheet" data={['1', 'Angular', 'Vue']} />
      <NativeSelect label="Color" data={['White', 'Angular', 'Vue']} />

        </Box>
        <div className='flex justify-end mt-10'>
        <Button variant="filled">Print</Button>
        <Button variant="outline" className='ml-3'>Reset</Button>
        </div>
      </Grid.Col>
      <Grid.Col span={6}>
        <img src={image} alt="" className='fit-contain h-5/6 w-full' />
      </Grid.Col>
    </Grid>
    </>
  );
}

export default MonitorPage;
