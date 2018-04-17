import React from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/markdown';
import 'brace/theme/textmate';

export default class NewArticle extends React.Component {
  render () {
    return (
      <div className="new-article-panel">
        <div style={{width:'300px', height:'300px'}}>
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
            style={{lineHeight: '1.6em'}} />
        </div>
      </div>
    )
  }
}