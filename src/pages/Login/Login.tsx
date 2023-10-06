
import { TextInput, Checkbox, Code, Text, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
function MonitorPage() {
 
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
    <Box  maw={340} mx="auto">
      <TextInput
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
      />

      {/* <Text size="sm" fw={500} mt="xl">
        Form values:
      </Text>
      <Code block mt={5}>
        {JSON.stringify(form.values, null, 2)}
      </Code> */}
    </Box>
  );
 
}
export default MonitorPage;