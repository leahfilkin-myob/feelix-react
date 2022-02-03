import React from "react";
import {
    Input,
    Select,
    BulkAdd,
} from "@myob/myob-widgets";


export function Items(props) {
    const tableColumns = [
        { key: 'name', description: 'Item name' },
        { key: 'aisle', description: 'Aisle' },
        { key: 'category', description: 'Category' },
        { key: 'more', description: 'More', hiddenTitle: true }
    ];

    const labels = tableColumns.reduce((arr, data) => [...arr, data.description], []);


    const renderRow = (index, data, onChange) => (
      <BulkAdd.Row key={index} index={index} rowData={{id: data.id}}>
          <BulkAdd.RowItem columnName={tableColumns[0].description} textWrap="wrap">
              <Input
                name={tableColumns[0].key}
                label={tableColumns[0].description}
                hideLabel
                value={data[tableColumns[0].key] ? data[tableColumns[0].key] : ""}
                onChange={onChange}
              />
          </BulkAdd.RowItem>
          <BulkAdd.RowItem columnName={tableColumns[1].description} textWrap="wrap">
              <Select
                hideLabel
                name={tableColumns[1].key}
                label={tableColumns[1].description}
                onChange={onChange}
                value={data[tableColumns[1].key] ? data[tableColumns[1].key] : ""}
              >
                  <Select.Option value="placeholder" label="Please select an aisle" />
                  <Select.Option value="opt1" label="Aisle 1" />
                  <Select.Option value="opt2" label="Aisle 2" />
                  <Select.Option value="opt3" label="Aisle 3" />
                  <Select.Option value="opt4" label="Aisle 4" />
                  <Select.Option value="opt5" label="Aisle 5" />
                  <Select.Option value="opt6" label="Aisle 6" />
                  <Select.Option value="opt7" label="Aisle 7" />
                  <Select.Option value="opt8" label="Aisle 8" />
                  <Select.Option value="opt9" label="Aisle 9" />
              </Select>
          </BulkAdd.RowItem>
          <BulkAdd.RowItem columnName={tableColumns[2].description} textWrap="wrap">
              <Select
                hideLabel
                name={tableColumns[2].key}
                label={tableColumns[2].description}
                onChange={onChange}
                value={data[tableColumns[2].key] ? data[tableColumns[2].key] : ""}
              >
                  <Select.Option value="placeholder" label="Please select a category" />
                  <Select.Option value="opt1" label="Produce" />
                  <Select.Option value="opt2" label="Bakery" />
                  <Select.Option value="opt3" label="Drinks" />
                  <Select.Option value="opt4" label="Confectionery" />
                  <Select.Option value="opt5" label="Deli" />
                  <Select.Option value="opt6" label="Dairy" />
                  <Select.Option value="opt7" label="Frozen" />
                  <Select.Option value="opt8" label="Baking Goods" />
                  <Select.Option value="opt9" label="Health and Beauty" />
              </Select>
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