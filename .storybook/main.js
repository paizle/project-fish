/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
    stories: [
        '../stories/**/DataTable.stories.jsx',
        '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-onboarding',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
    ],
    core: {
        disableTelemetry: true,
    },
    docs: {
        autodocs: 'tag',
    },
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    managerHead: (head) => `
    <style>
      [data-item-id="configure-your-project--docs"] {
        display: none !important;
      }
    </style>
    `,
}
export default config
