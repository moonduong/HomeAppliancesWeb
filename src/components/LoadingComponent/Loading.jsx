import { Spin } from "antd";
import React from "react";

const Loading = ({children, isPending, delay}) => {
    return (
        <Spin spinning={isPending} delay={delay}>
            {
                children
            }
        </Spin>
    );
}

export default Loading;
