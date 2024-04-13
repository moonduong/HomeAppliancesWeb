import { Divider, Radio, Table } from "antd";
import React, { useState } from "react";

const TableComponent = (props) => {
    const {selectionType= 'checkbox'} = props

    const columns=[
        {
            title:'Name',
            dataIndex:'name',
            render: (text)=> <a>{text}</a>
        },
        {
            title:'Age',
            dataIndex:'age'
        }
    ];

    const data =[
        {
            key:'1',
            name: 'John Brown',
            age:32,
        },
        {
            key:'2',
            name:'Moon',
            age:21,
        }
    ];



    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}, 'selectedRows:', selectedRows`)
        },
        getCheckboxProps: (record) => ({
          disabled: record.name === 'Disabled User',
        //   // Column configuration not to be checked
          name: record.name,
        }),
      };
    

    return (
        
            <Table
            rowSelection={{
                type: selectionType,
                ...rowSelection,
              }}
              columns={columns}
              dataSource={data}
            //   {...props}
            />
    )
}

export default TableComponent