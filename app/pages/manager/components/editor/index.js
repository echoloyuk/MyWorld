import React from 'react';
import AceEditor from 'react-ace';

import './index.scss';

import 'brace/mode/markdown';
import 'brace/theme/textmate';

export default class Editor extends React.Component {
  render() {
    const editorStyle = {
      lineHeight: '1.8em'
    }
    return (
      <div className="outer">
        <div className="editor-panel">
          <div className="editor">
            <div className="title">这是一个标题</div>
            <AceEditor
              mode="markdown"
              theme="textmate"
              name="blah2"
              fontSize={14}
              highlightActiveLine={true}
              showGutter={false}
              tabSize={2}
              value={`var a = 5;
              var b = 6;`}
              width="100%"
              height="100%"
              enableLiveAutocompletion={true}
              style={editorStyle} />
          </div>
          <div className="preview"></div>
        </div>
      </div>
    )
  }
}