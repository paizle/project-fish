import DataTable from '@/Components/DataTable/DataTable';
import { uniqueId } from 'lodash';

export default {
  title: 'Example/DataTable',
  component: DataTable,
};

const Template = (args) => <DataTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    {name: 'Item Name 1', price: 1},
    {name: 'Item Name 2', price: 1.1}
  ],
  schema: {
    'ID': (_, index) => index + 1,
    'Name': 'name',
    'Price': (row) => '$' + row.price?.toFixed(2)
  },
  uniqueKey: 'ID'
}
