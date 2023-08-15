import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { CustomH1, CustomH2, CustomH3, CustomParagraph, CustomAnchor, CustomPre, CustomCode, CustomBlockquote, CustomOl, CustomUl } from './custom-tag';
import { CustomTable, CustomTableHeader, CustomTableHead, CustomTableBody, CustomTableRow, CustomTableCell } from './custom-table';

type Props = {
  markdown: string;
  visible: boolean;
};

const Preview = ({ markdown, visible }: Props) => {
  return (
    <div className={`w-full ${visible ? undefined : 'hidden'}`}>
      <h3 className="p-3">README.md</h3>
      <ReactMarkdown
        className="bg-slate-900 font-readme px-4 py-3 border-2 h-[40rem] overflow-y-auto"
        children={markdown}
        remarkPlugins={[remarkGfm]}
        components={{
          h1: (props) => <CustomH1 {...props} />,
          h2: (props) => <CustomH2 {...props} />,
          h3: (props) => <CustomH3 {...props} />,
          p: (props) => <CustomParagraph {...props} />,
          a: (props) => <CustomAnchor {...props} />,
          table: (props) => <CustomTable {...props} />,
          thead: (props) => <CustomTableHeader {...props} />,
          th: (props) => <CustomTableHead {...props} />,
          tbody: (props) => <CustomTableBody {...props} />,
          tr: (props) => <CustomTableRow {...props} />,
          td: (props) => <CustomTableCell {...props} />,
          pre: (props) => <CustomPre {...props} />,
          code: (props) => <CustomCode {...props} />,
          blockquote: (props) => <CustomBlockquote {...props} />,
          ol: (props) => <CustomOl {...props} />,
          ul: (props) => <CustomUl {...props} />,
        }}
      />
    </div>
  );
};

export default Preview;
