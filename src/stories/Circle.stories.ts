import {Meta} from "@storybook/react";
import Circle from "./Circle";

// Circleのカタログを追加する
//メタ情報
const meta: Meta<typeof Circle> = {
    component: Circle,
    title: "Circle",
};

export default meta;

//１つ目のカタログの登録
export const BaseCircle = {};