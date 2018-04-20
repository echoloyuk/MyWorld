import React from 'react';
import Editor from '../components/editor/index';


export default class NewArticle extends React.Component {
  render () {
    return (
      <div className="edit-article-panel">
        <Editor />
      </div>
    )
  }
}