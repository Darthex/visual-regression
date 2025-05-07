import App from "./App.tsx";
import {type Meta, type StoryFn} from "@storybook/react";

export default {
  title: 'APP',
  component: App,
} as Meta<typeof App>;

const Template: StoryFn<typeof App> = () => <App />;

export const Default = Template.bind({});
