import DataTable from '@/Components/DataTable/DataTable';

export default {
  title: 'Example/DataTable',
  component: DataTable,
};

const Template = (args) => <DataTable {...args} />;

export const Default = Template.bind({});
Default.args = {
};
