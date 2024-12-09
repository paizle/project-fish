import DataTable from '@/Components/DataTable/DataTable';
import NewBrunswickMap from '@/Components/NewBrunswickMap/NewBrunswickMap';

export default {
  title: 'Example/NewBrunswickMap/NewBrunswickMap',
  component: NewBrunswickMap,
};

const Template = (args) => <NewBrunswickMap {...args} />;

export const Default = Template.bind({});
Default.args = {}
