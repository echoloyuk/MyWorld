import React from 'react';
import AceEditor from 'react-ace';
import {Radio, Icon, Button} from 'antd';

import './index.scss';
import 'brace/mode/markdown';
import 'brace/theme/textmate';

const Group = Radio.Group;
const RButton = Radio.Button;

export default class Editor extends React.Component {
  render() {
    const editorStyle = {
      lineHeight: '1.8em'
    }
    return (
      <div className="outer">
        <div className="control-panel">
          <div className="op-panel">
            <Button shape="circle">
              <Icon type="save" />
            </Button>
          </div>
          <div className="view-panel">
            <Group value="mix" size="small">
              <RButton value="mix">
                <Icon type="appstore-o" />
              </RButton>
              <RButton value="edit">
                <Icon type="edit" />
              </RButton>
              <RButton value="view">
                <Icon type="eye-o" />
              </RButton>
            </Group>
          </div>
        </div>
        <div className="editor-panel">
          <div className="editor">
            <div className="title">
              <input type="text" className="title-input" placeholder="请输入标题"/>
            </div>
            <div className="content">
              <AceEditor
                wrapEnabled={true}
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
                showPrintMargin={false}
                enableLiveAutocompletion={true}
                style={editorStyle} />
            </div>
          </div>
          <div className="preview"></div>
        </div>
      </div>
    )
  }
}