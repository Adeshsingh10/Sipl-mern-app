import React from 'react';
import { Editor as ClassicEditor } from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';

const Editor = () => {
    return (
        <>
            <div>
                <div className="App">
                    <h2>Using CKEditor</h2>
                    <CKEditor
                        editor={ClassicEditor}
                        data="<P>Hello From Make Make </p>"
                        onReady={(editor) => {
                            //you can store the 'editor and use when it is needed.
                            console.log(editor, "Editor is ready to use");
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log({ event, editor, data });
                        }}

                        onBlur={(event, editor) => {
                            console.log('blur', editor);
                        }}
                        onFocus={(event, editor) => {
                            console.log('focus', editor);
                        }}
                    >
                    </CKEditor>
                </div>

            </div>

        </>
    );
};

export default Editor;