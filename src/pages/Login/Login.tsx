
import { TextInput, Checkbox, Code, Text, Box, Grid, Tabs, rem, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
function MonitorPage() {
  const iconStyle = { width: rem(12), height: rem(12) };
   const form = useForm({
    initialValues: {
      terms: false,
      user: {
        Email: '',
        Password: '',
      },
    },
  });

  return (
    <div className='w-screen'>
    <Box  maw='80%' mx="auto">
    <Grid>
      <Grid.Col span={6}>1</Grid.Col>
      <Grid.Col span={5}>
        <div><Tabs defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery">
          <Button><Link to="../">trang chu</Link></Button>
        </Tabs.Tab>
        <Tabs.Tab value="messages">
        <Button><Link to="./login">login</Link></Button>
        </Tabs.Tab>
        <Tabs.Tab value="settings">
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="messages">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings">
        Settings tab content
      </Tabs.Panel>
    </Tabs></div>
        <div><TextInput
        label="Email"
        placeholder="Email"
        {...form.getInputProps('user.firstName')}
      />
      <TextInput
        label="Password"
        placeholder="Password"
        mt="md"
        {...form.getInputProps('user.lastName')}
      />
      <Checkbox
        label="I accepts terms & conditions"
        mt="sm"
        {...form.getInputProps('terms', { type: 'checkbox' })}
      /></div>
        
      </Grid.Col>
    </Grid>
      

      {/* <Text size="sm" fw={500} mt="xl">
        Form values:
      </Text>
      <Code block mt={5}>
        {JSON.stringify(form.values, null, 2)}
      </Code> */}
    </Box>
    </div>
  );
 
}
export default MonitorPage;