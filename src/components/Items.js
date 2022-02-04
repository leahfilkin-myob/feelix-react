import React from "react";
import {
    BulkAdd,
} from "@myob/myob-widgets";
import {Aisles} from "./Aisles";
import {Categories} from "./Categories";
import {Item} from "./Item";


export function Items(props) {
    const tableColumns = [
        { key: 'name', description: 'Item name' },
        { key: 'aisle', description: 'Aisle' },
        { key: 'category', description: 'Category' },
        { key: 'more', description: 'More', hiddenTitle: true }
    ];

    const labels = tableColumns.reduce((arr, data) => [...arr, data.description], []);


    const renderRow = (index, data, onChange) => (
      <BulkAdd.Row role={"row "+index} key={index} index={index} rowData={{id: data.id}}>
          <BulkAdd.RowItem columnName={tableColumns[0].description} textWrap="wrap">
            <Item column={tableColumns[0]}
                  value={data[tableColumns[0].key] ? data[tableColumns[0].key] : ""}
                  onChange={onChange} />
          </BulkAdd.RowItem>
          <BulkAdd.RowItem columnName={tableColumns[1].description} textWrap="wrap">
            <Aisles
              column={tableColumns[2]}
              value={data[tableColumns[2].key] ? data[tableColumns[2].key] : ""}
              onChange={onChange}/>
          </BulkAdd.RowItem>
          <BulkAdd.RowItem columnName={tableColumns[2].description} textWrap="wrap">
            <Categories
              column={tableColumns[1]}
              value={data[tableColumns[1].key] ? data[tableColumns[1].key] : ""}
              onChange={onChange}/>
          </BulkAdd.RowItem>
      </BulkAdd.Row>
    );

    const onRemoveRow = index => {
        props.tickItemCallback(index);
    };

    const onAddRow = newData => {
        props.addItemCallback(newData)
    };

    const onRowChange = (index, name, value) => {
        props.changeItemCallback(index, name, value);
    };

    return(
      <BulkAdd>
          <BulkAdd.Header>
              {tableColumns.map(column => (
                <BulkAdd.HeaderItem
                  key={column.key}
                  columnName={column.description}
                  valign="middle"
                >
                    {!column.hiddenTitle ? column.description : ""}
                </BulkAdd.HeaderItem>
              ))}
          </BulkAdd.Header>
          <BulkAdd.Rows
            data={props.items}
            labels={labels}
            renderRow={renderRow}
            onRowChange={onRowChange}
            onRemoveRow={onRemoveRow}
            onAddRow={onAddRow}
          />
      </BulkAdd>
    );
}