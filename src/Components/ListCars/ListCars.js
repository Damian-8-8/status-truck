import React, { Component } from 'react';
import { List, Avatar } from "antd";
import './ListCars.css';

class ListCars extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <List
      style={{margin: "50px"}}
      itemLayout="horizontal"
      dataSource={this.props.listOfCars}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={`./icons/${getImgName(item.status)}.png`} />}
            title={<a href="https://ant.design">{item.title}</a>}
            description={item.description}
          />
        </List.Item>
      )}
    />
    );
  }
}

function getImgName (status) {
  switch (status) {
    case 0:
      return "stop-red"
    case 1:
      return "warning-yelow"
    case 2:
      return "check-green"

    default:
      break;
  }
}

export default ListCars;