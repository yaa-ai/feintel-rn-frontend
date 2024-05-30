import type { Meta, StoryObj } from '@storybook/react';
import { MainBackground } from '../../../components/MainBackground';

const meta = {
  component: MainBackground,
} satisfies Meta<typeof MainBackground>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {

  },
};