import {Meta, StoryObj} from "@storybook/react";
import Circle from "./Circle";
import {Button} from "@/stories/Button";

// Circleのカタログを追加する
//メタ情報
const meta: Meta<typeof Circle> = 
    component: Circle,
    title: "Circle",
    argTypes: {
        variant: {
            control: { type: "select"},
            options: ["orange", "green", "yellow"]
        },
    })

export default meta;
type Story = StoryObj<typeof meta>;

//１つ目のカタログの登録
export const BaseCircle: Story = {
    args: {
        variant: "orange"
    },
};

export const GreenCircle: Story = {
    args: {
        variant: "green"
    },
};

export const YellowCircle: Story = {
    args: {
        variant: "yellow"
    },
};

