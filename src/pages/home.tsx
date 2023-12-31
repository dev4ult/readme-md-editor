import * as React from 'react';
import Editor from '@/components/editor';
import Preview from '@/components/previewer';
import Documentation from './documentation';
import { AiOutlinePicLeft, AiOutlinePicCenter, AiOutlinePicRight } from 'react-icons/ai';

const Home = () => {
  const [markdown, setMarkdown] = React.useState('');
  const [posEnd, setPosEnd] = React.useState(0);
  const [view, setView] = React.useState({
    edit: true,
    preview: true,
  });

  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { value } = e.target;
    localStorage.setItem('last-md-note', value);
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
          finalText = subStart + '[' + selectedWord + '](https:://google.com)' + subEnd;
          break;
        case 'code':
          positionEnd = getEndPos((positionStart == 0 ? '' : '\n') + '```\n');
          finalText = subStart + (positionStart == 0 ? '' : '\n') + '```\n' + selectedWord + '\n```' + subEnd;
          break;
        case 'horizontal-rule':
          positionEnd = getEndPos((positionStart == 0 ? '' : '\n\n') + '---' + '\n\n');
          finalText = subStart + (positionStart == 0 ? '' : '\n\n') + '---' + '\n\n' + selectedWord + subEnd;
          break;
        case 'list-ol':
          positionEnd = getEndPos((positionStart == 0 ? '' : '\n') + '1. ');
          finalText = subStart + (positionStart == 0 ? '' : '\n') + '1. \n2. \n3. \n' + selectedWord + subEnd;
          break;
        case 'list-ul':
          positionEnd = getEndPos((positionStart == 0 ? '' : '\n') + '- ');
          finalText = subStart + (positionStart == 0 ? '' : '\n') + '- \n- \n- \n' + selectedWord + subEnd;
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
    let lastMdNote = localStorage.getItem('last-md-note');
    const note = `visit my [github profile](https://github.com/dev4ult) to find more project i made`;
    if (!lastMdNote) {
      localStorage.setItem('last-md-note', note);
      lastMdNote = localStorage.getItem('last-md-note');
    }
    setMarkdown(lastMdNote ? lastMdNote : note);
  }, []);

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
        <Editor handleClick={handleClick} handleChange={handleChange} value={markdown} ref={textAreaRef} handleView={handleView} visible={edit} isPreviewVisible={preview} />
        <Preview markdown={markdown} visible={preview} />
        <div className={`absolute right-0 top-0 p-3 mt-0.5 flex gap-2 items-center ${preview ? undefined : 'hidden'}`}>
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
      <Documentation />
    </div>
  );
};

export default Home;
