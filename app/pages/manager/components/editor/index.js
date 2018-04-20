import React from 'react';
import AceEditor from 'react-ace';
import {Radio, Icon, Button} from 'antd';
import marked from 'marked';

import './index.scss';
import './markdown.scss';
import 'brace/mode/markdown';
import 'brace/theme/textmate';

const Group = Radio.Group;
const RButton = Radio.Button;

export default class Editor extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      source: '',
      html: '', // markdown后的正文
    }
    this.onInputTitle = this.onInputTitle.bind(this);
    this.onInputContent = this.onInputContent.bind(this);
    this.onScrollEditor = this.onScrollEditor.bind(this);
  }
  onInputTitle (e) {
    let val = e.target.value;
    this.setState({
      title: val
    });
  }
  onInputContent (newVal) {
    let html = marked(newVal);
    this.setState({
      source: newVal,
      html
    });
  }
  onScrollEditor (editor) {
    let editorTop = editor.session.getScrollTop();
    let editorHeight = editor.renderer.layerConfig.maxHeight;
    let previewDom = this.refs.preview;
    if (editorTop < 0) { // 获取的scrollTop有可能是负值
      editorTop = 0;
    }
    previewDom.scrollTop = (editorTop / editorHeight) * previewDom.scrollHeight;
  }
  render() {
    const editorStyle = {
      lineHeight: '1.8em'
    }
    const {
      title,
      html,
      source
    } = this.state;

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
              <input 
                type="text" 
                className="title-input" 
                placeholder="请输入标题"
                value={title}
                onInput={this.onInputTitle} />
            </div>
            <div className="content">
              <AceEditor
                ref="ace-editor"
                wrapEnabled={true}
                mode="markdown"
                theme="textmate"
                name="blah2"
                fontSize={14}
                highlightActiveLine={true}
                showGutter={false}
                tabSize={2}
                value={source}
                width="100%"
                height="100%"
                showPrintMargin={false}
                enableLiveAutocompletion={true}
                onChange={this.onInputContent}
                onScroll={this.onScrollEditor}
                style={editorStyle} />
            </div>
          </div>
          <div 
            ref="preview"
            className="preview markdown-panel"
            dangerouslySetInnerHTML={{__html: `<h1 class="preview-title">${title}</h1>${html}`}} />
        </div>
      </div>
    )
  }
}