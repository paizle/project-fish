import NewIndicator from '@/Components/NewIndicator/NewIndicator';

export default {
  title: 'Example/NewIndicator',
  component: NewIndicator,
};

const Template = (args) => <NewIndicator {...args} />;

export const Default = Template.bind({});
Default.args = {
};
