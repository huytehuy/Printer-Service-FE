
import { TextInput, Image , Checkbox, Code, Text, Box, Grid, Tabs, rem, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
function MonitorPage() {
  const iconStyle = { width: rem(12), height: rem(12) };
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
    
  });

  return (
    <div className='w-screen h-screen' >
    <Box  className='h-full'>
    <Grid>
      {/* Image */}
      <Grid.Col span={6}>
     <img src="src/pages/Login/Frame 6.png" alt="" height={900} width={820} />
        </Grid.Col>
        {/* Login */}
        
      <Grid.Col span={6}>

        <div className='flex justify-center items-center h-full flex-col'>
        <div className="bg-no-repeat bg-center flex justify-center"  >
        <img src="src/pages/Login/Frame 7.png" alt="" height={100} width={100} />
        </div>
        <div>
          <h1>LOGIN</h1>
          </div>
          <div>
          <TextInput
        label="Email"
        placeholder="Email"
        description=""
        inputWrapperOrder={['label', 'error', 'input', 'description']}
      />
      <TextInput
        mt="xl"
        label="Password"
        placeholder="Email"
        description=""
        // error=""
        inputWrapperOrder={['label', 'input', 'description', 'error']}
      />
    <div className='flex justify-center pt-5'> {/* pt-5 is for padding-top */}
    <Button fullWidth size="md" variant="filled">Login</Button>
    </div>

    <div className='flex justify-center pt-5'> {/* pt-5 is for padding-top */}
    <Button fullWidth size="md" variant="filled">Cancel</Button>
    </div>
          </div>
        </div>
        <div>
        </div>
        </Grid.Col>
    </Grid>
    </Box>
    </div>
  );
 
}
export default MonitorPage;