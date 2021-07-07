import React, { useState } from "react";
import { Story } from "@storybook/react";

import { SSearchInputFilter } from "../../components";

export default {
    title: "React/SSearchInputFilter (PD)",
    component: SSearchInputFilter,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof SSearchInputFilter>;

const Template: Story<PropsType> = (args) => {
    const [searchValue, setSearchValue] = useState<string>();
    return (
        <div style={{ width: "50%" }}>
            <SSearchInputFilter {...args} searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
    );
};

export const SearchInputSimple = Template.bind({});
SearchInputSimple.args = {
    tableFilter: false,
    placeholder: "Suchen",
};
