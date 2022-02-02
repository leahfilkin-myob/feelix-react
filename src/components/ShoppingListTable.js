import React from "react";
import {
  Input,
  Select,
  BulkAdd,
  Button,
  MoreIcon, Checkbox
} from "@myob/myob-widgets";


export function ShoppingListTable() {
  const [data, setData] = React.useState([
    {
      item: "",
      aisle: "Milk",
      category: "Dairy",
    }
  ]);

  const [selectedData, setSelectedData] = React.useState([]);

  const rawStateDataObject = {
    item: "",
    aisle: undefined,
    category: undefined,
  };

  const tableColumns = [
    { key: 'item', description: 'Item' },
    { key: 'aisle', description: 'Aisle' },
    { key: 'category', description: 'Category' },
    { key: 'more', description: 'More', hiddenTitle: true }
  ];
  const labels = tableColumns.reduce((arr, data) => [...arr, data.description], []);


  const renderRow = (index, data, onChange) => (
    <BulkAdd.Row isSelected={data.isSelected} onRowSelect={onRowSelect} key={index} index={index} rowData={{id: data.id}}>

      <BulkAdd.RowItem columnName="checked">
        <Checkbox
          name={`${data.id}-select`}
          label={`Select row ${index}`}
          hideLabel
          onChange={e => selectItem(data, e.target.checked)}
          checked={data.isSelected}
        />
      </BulkAdd.RowItem>
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
          <Select.Option value="opt4" label="Confectionary" />
          <Select.Option value="opt5" label="Deli" />
          <Select.Option value="opt6" label="Dairy" />
          <Select.Option value="opt7" label="Frozen" />
          <Select.Option value="opt8" label="Cleaning Products" />
          <Select.Option value="opt9" label="Health and Beauty" />
        </Select>
      </BulkAdd.RowItem>
    </BulkAdd.Row>
  );

  const onRowSelect = (id, isSelected) => {
    if (id === null) {
      setSelectedData(isSelected ? data.map(item => item.id) : [])
    } else {
      const exists = selectedData.includes(id);
      setSelectedData(
        exists ? selectedData.filter(selectedId => selectedId !== id) : selectedData.concat(id)
      )
    }
  };

  const selectAll = isSelected => {
    setData(data.map(d => ({ ...d, isSelected })))
  };


  const selectItem = (item, isSelected) => {
    setData(
      data.map(d => (d === item ? { ...item, isSelected } : d))
    )
  };
  const onRemoveRow = index => {
    setData(
      data.filter((value, dataIndex) => dataIndex !== index)
    );
  };

  const selectedCount = data.filter(d => d.isSelected).length;


  const onAddRow = newData => {
    const { id, ...rawData } = newData;

    setData([
        ...data,
        {
          ...rawStateDataObject,
          ...rawData
        }
      ]
    );
  };

  const onRowChange = (index, name, value) => {
    const newData = [...data];

    if (typeof name === "object") {
      newData[index] = {
        ...newData[index],
        ...name
      };
    } else {
      newData[index][name] = value;
    }
    setData(newData);
  };

  return(

    <BulkAdd onRowSelect={onRowSelect}>
      <BulkAdd.Header>
        <BulkAdd.HeaderItem
          valign="middle"
        >
        <Checkbox
          name="bulk-select"
          label="Bulk select"
          hideLabel
          onChange={e => selectAll(e.target.checked)}
          checked={
            data.length &&
            selectedCount === data.length
          }
          indeterminate={
            selectedCount > 0 && selectedCount !== data.length
          }
        />
        </BulkAdd.HeaderItem>
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
        data={data}
        labels={labels}
        renderRow={renderRow}
        onRowChange={onRowChange}
        onRemoveRow={onRemoveRow}
        onAddRow={onAddRow}
      />
    </BulkAdd>

  );

}