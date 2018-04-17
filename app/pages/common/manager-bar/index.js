import React from 'react';
import {Menu, Icon, Button} from 'antd';
import {Link} from 'react-router-dom';

import config from '../../../config/manager';

import './index.scss';

export default class ManagerBar extends React.Component {
  render () {
    let hash = window.location.hash;
    hash = hash.replace(/#\//g, '');
    let defaultKey = config.nav[0].key;
    return (
      <div className="manager-bar-panel">
        <div className="top-side">
        </div>
        <div className="left-side">
          <Menu
            defaultSelectedKeys={[defaultKey]}
            selectedKeys={[hash || defaultKey]}
            theme="dark" >
            {config.nav && config.nav.map((item, index) => {
              return (
                <Menu.Item key={item.key}>
                  <Link to={item.key}>
                    <Icon type={item.icon} />
                    <span>{item.title}</span>
                  </Link>
                </Menu.Item>
              )
            })}
          </Menu>
          <div>{this.props.location}</div>
        </div>
      </div>
    )
  }
}