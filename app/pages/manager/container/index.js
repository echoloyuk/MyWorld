import React from 'react';
import ManagerBar from '../../common/manager-bar/index';

import './index.scss';

export default class Index extends React.Component {
  render () {
    return (
      <div className="manager-panel">
        <ManagerBar />
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}