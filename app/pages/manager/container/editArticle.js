import React from 'react';
import Editor from '../components/editor/index';
import {Modal} from 'antd';


export default class NewArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFinish: false
    }
    this.onFinish = this.onFinish.bind(this);
  }
  onFinish (title, content) {
    Modal.success({
      title,
      content,
      onOk: () => {
        window.location.hash = '/article';
        window.location.reload();
      }
    });
  }
  render () {
    return (
      <div className="edit-article-panel">
        <Editor
          onFinish={this.onFinish} />
      </div>
    )
  }
}