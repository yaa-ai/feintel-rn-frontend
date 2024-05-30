import type { Meta, StoryObj } from '@storybook/react';
import { HelloWave } from './HelloWave';

const meta = {
  component: HelloWave,
} satisfies Meta<typeof HelloWave>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {

  },
};