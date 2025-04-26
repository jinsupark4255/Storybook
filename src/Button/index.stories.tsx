import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
    loading: { control: "boolean" },
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const ButtonDesign: Story = {
  render: () => (
    <div className="flex flex-col  gap-4">
      <div className="flex flex-col gap-4">
        <span>Primary Button</span>
        <div className="space-x-1">
          <Button label="Primary Small" variant="primary" size="small" />
          <Button label="Primary Medium" variant="primary" size="medium" />
          <Button label="Primary Large" variant="primary" size="large" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span>Secondary Button</span>
        <div className="space-x-1">
          <Button label="Secondary Small" variant="secondary" size="small" />
          <Button label="Secondary Medium" variant="secondary" size="medium" />
          <Button label="Secondary Large" variant="secondary" size="large" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span>Danger Button</span>
        <div className="space-x-1">
          <Button label="Danger Small" variant="danger" size="small" />
          <Button label="Danger Medium" variant="danger" size="medium" />
          <Button label="Danger Large" variant="danger" size="large" />
        </div>
      </div>
    </div>
  ),
};
