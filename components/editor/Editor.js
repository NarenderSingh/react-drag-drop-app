import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';

const Editor = ({}) => {
  const editor = useRef(null);
  const [content, setContent] = useState(
    '<div><a href="https://www.google.com">https://www.google.com</a></div>'
  );

  const config = {
    readonly: false
  };

  return (
    <React.Fragment>
      <div className='row'>
        <div className='col-sm-12'>
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1}
            onBlur={(newContent) => setContent(newContent)}
            // onChange={(newContent) => {}}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Editor;
