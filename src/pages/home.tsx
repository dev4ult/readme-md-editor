import * as React from 'react';
import Editor from '@/components/editor';
import Preview from '@/components/previewer';
import { AiOutlinePicLeft, AiOutlinePicCenter, AiOutlinePicRight } from 'react-icons/ai';

const Home = () => {
  const [markdown, setMarkdown] = React.useState(`# Readme Markdown Editor
  
### How to Use?

cheatsheet goes [here](https://www.markdownguide.org/cheat-sheet/)
  `);
  const [posEnd, setPosEnd] = React.useState(0);
  const [view, setView] = React.useState({
    edit: true,
    preview: true,
  });

  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { value } = e.target;
    setMarkdown(value);
  }

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    const editorType = e.currentTarget.getAttribute('id');

    setMarkdown((prev) => {
      let positionStart = 0;
      let positionEnd = 0;

      if (textAreaRef.current) {
        positionStart = textAreaRef.current?.selectionStart;
        positionEnd = textAreaRef.current?.selectionEnd;
        textAreaRef.current.focus();
      }

      const selectedWord = prev.substring(positionStart, positionEnd);

      const subStart = prev.substring(0, positionStart);
      const subEnd = prev.substring(positionEnd, prev.length);

      let finalText = '';

      function getEndPos(middle: string) {
        return (subStart + middle + selectedWord).length;
      }

      switch (editorType) {
        case 'heading':
          positionEnd = getEndPos((positionStart == 0 ? '' : '\n') + '# ');
          finalText = subStart + (positionStart == 0 ? '' : '\n') + '# ' + selectedWord + subEnd;
          break;
        case 'bold':
          positionEnd = getEndPos('**');
          finalText = subStart + '**' + selectedWord + '**' + subEnd;
          break;
        case 'italic':
          positionEnd = getEndPos('*');
          finalText = subStart + '*' + selectedWord + '*' + subEnd;
          break;
        case 'strikethrough':
          positionEnd = getEndPos('~');
          finalText = subStart + '~' + selectedWord + '~' + subEnd;
          break;
        case 'link':
          positionEnd = getEndPos('[');
          finalText = subStart + '[' + selectedWord + '](https:://)' + subEnd;
          break;
        case 'horizontal-rule':
          positionEnd = getEndPos((positionStart == 0 ? '' : '\n\n') + '---' + '\n\n');
          finalText = subStart + (positionStart == 0 ? '' : '\n\n') + '---' + '\n\n' + selectedWord + subEnd;
          break;
        case 'list-ol':
          positionEnd = getEndPos((positionStart == 0 ? '' : '\n') + '1. ');
          finalText = subStart + (positionStart == 0 ? '' : '\n') + '1. \n2. \n3. \n' + '\n' + selectedWord + subEnd;
          break;
        case 'list-ul':
          positionEnd = getEndPos((positionStart == 0 ? '' : '\n') + '- ');
          finalText = subStart + (positionStart == 0 ? '' : '\n') + '- \n- \n- \n' + '\n' + selectedWord + subEnd;
          break;
        default:
          return prev;
      }

      setPosEnd(positionEnd);

      return finalText;
    });
  }

  function handleView(e: React.MouseEvent<HTMLElement>) {
    const viewType = e.currentTarget.getAttribute('id');

    setView((prev) => {
      switch (viewType) {
        case 'edit':
          return { edit: true, preview: false };
        case 'preview':
          return { edit: false, preview: true };
        case 'full':
          return { edit: true, preview: true };
        default:
          return { ...prev };
      }
    });
  }

  React.useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.setSelectionRange(posEnd, posEnd);
      textAreaRef.current.focus();
    }
  }, [posEnd]);

  const { edit, preview } = view;

  return (
    <div>
      <div className="flex gap-5 relative">
        <Editor handleClick={handleClick} handleChange={handleChange} value={markdown} ref={textAreaRef} visible={edit} />
        <Preview markdown={markdown} visible={preview} />
        <div className="absolute right-0 top-0 mt-3 mr-4 flex gap-2 items-center">
          <button type="button" id="edit" onClick={handleView}>
            <AiOutlinePicLeft size="1.35rem" />
          </button>
          <button type="button" id="full" onClick={handleView}>
            <AiOutlinePicCenter size="1.35rem" />
          </button>
          <button type="button" id="preview" onClick={handleView}>
            <AiOutlinePicRight size="1.35rem" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
