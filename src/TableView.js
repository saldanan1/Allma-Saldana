import React from 'react';
import TableViewExpanded from './TableViewExpanded'
import Highlighter from 'react-highlight-words';


import { Table, Input, Button, Space, Tag} from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import incidientData from './incidents.json'

Object.keys(incidientData.incidents).forEach(function(key) {
    // console.log('Key : ' + key + ', Value : ' + schoolsData[key].INSTNM)
    incidientData.incidents[key].key = key
})
incidientData.incidents.sort((a,b) => a.incidentStatusId.localeCompare(b.incidentStatusId))
class TableView extends React.Component {
    state = {
        searchText: '',
        searchedColumn: '',
        columns: this.columns
      };
      getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              ref={node => {
                this.searchInput = node;
              }}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
              style={{ width: 188, marginBottom: 8, display: 'block' }}
            />
            <Space>
              <Button
                type="primary"
                onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{ width: 90 }}
              >
                Search
              </Button>
              <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                Reset
              </Button>
            </Space>
          </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
          record[dataIndex]
            ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
            : '',
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => this.searchInput.select(), 100);
          }
        },
        render: text =>
          this.state.searchedColumn === dataIndex ? (
            <Highlighter
              highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
              searchWords={[this.state.searchText]}
              autoEscape
              textToHighlight={text ? text.toString() : ''}
            />
          ) : (
            text
          ),
      });
    
      handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
          searchText: selectedKeys[0],
          searchedColumn: dataIndex,
        });
      };
    
      handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
      };
      columns = [
        {
          title: 'Name', 
          dataIndex: 'name',
          key: 'name',
          ...this.getColumnSearchProps('name'),
        },
        {
          title: 'Status',
          dataIndex: 'incidentStatusId',
          key: 'incidentStatusId',
          filters: [
            {
              text: 'Declared',
              value: 'DECLARED',
            },
            {
              text: 'Resolved',
              value: 'RESOLVED',
            },
          ],
          // specify the condition of filtering result
          // here is that finding the name started with `value`
          onFilter: (value, record) => record.incidentStatusId.indexOf(value) === 0,
          sorter: (a, b) => a.incidentStatusId.localeCompare(b.incidentStatusId)
        },
      ]; 
    render(){
      return <div>
        <Table 
        columns={this.columns} 
        expandable={{
        expandedRowRender: incident =>
        <div style={{ margin: 0 }}>
          <TableViewExpanded 
          incidentObj = {incident}
          />
        </div>
        }}
        dataSource={incidientData.incidents} 
        rowKey={"key"}
        />
        </div>
      }
}
export default TableView;
