import React from 'react';
import {Menu, Icon, Button} from 'antd';
import {Link} from 'react-router-dom';

import config from '../../../config/manager';

import './index.scss';

export default class ManagerBar extends React.Component {
  render () {
    return (
      <div className="manager-bar-panel">
        <div className="top-side">

        </div>
        <div className="left-side">
          <Menu
            defaultSelectedKeys={['0']}
            theme="dark" >
            {config.nav && config.nav.map((item, index) => {
              return (
                <Menu.Item key={index}>
                  <Link to={item.to}>
                    <Icon type={item.icon} />
                    <span>{item.title}</span>
                  </Link>
                </Menu.Item>
              )
            })}
          </Menu>
        </div>
      </div>
    )
  }
}