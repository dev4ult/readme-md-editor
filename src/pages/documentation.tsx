import { Table, TableBody, TableHeader, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { FaGithub } from 'react-icons/fa';

const Documentation = () => {
  const TableRows = () => {
    const elementData = [
      {
        element: 'Heading',
        syntax: ['#', '##', '###'],
        example: ['# This is Heading 1', '# This is Heading 2', '# This is Heading 3'],
        output: [<h1 className="text-2xl font-bold">This is Heading 1</h1>, <h2 className="font-semibold text-xl">This is Heading 2</h2>, <h3 className="font-semibold text-lg">This is Heading 3</h3>],
      },
      {
        element: 'Bold',
        syntax: '****',
        example: '**Bold Text**',
        output: <strong>Bold Text</strong>,
      },
      {
        element: 'Italic',
        syntax: '**',
        example: '*Italic Text*',
        output: <i>Italic Text</i>,
      },
      {
        element: 'Strikethrough',
        syntax: '~~',
        example: '~Strikethrough Text~',
        output: <s>Strikethrough Text</s>,
      },
      {
        element: 'Code',
        syntax: '``',
        example: "`import * as React from 'React'`",
        output: <code className="p-2 rounded bg-slate-800">Import * as React from 'React'</code>,
      },
      {
        element: 'Multiline Code',
        syntax: '``````',
        example: (
          <pre>
            {`''' 
package main
        
import "fmt"

func main() {
    fmt.Println("Hello World")
}
'''`}
          </pre>
        ),
        output: (
          <pre className="px-3 py-2 bg-slate-800 rounded w-full font-mono">
            {`package main

import "fmt"

func main() {
    fmt.Println("Hello World")
}`}
          </pre>
        ),
      },
      {
        element: 'Blockquote',
        syntax: '>',
        example: '> This is a Blockquote Text',
        output: <p className="text-sm pl-2 border-l-4 border-slate-600">This is a Blockquote Text</p>,
      },
    ];

    function listOrString(data: string | string[] | React.ReactNode) {
      return data instanceof Array ? (
        <ul>
          {data.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      ) : (
        data
      );
    }

    return elementData.map((data) => {
      const { element, syntax, example, output } = data;
      return (
        <TableRow>
          <TableCell className="border-[1px] border-slate-500">{element}</TableCell>
          <TableCell className="border-[1px] border-slate-500">{listOrString(syntax)}</TableCell>
          <TableCell className="border-[1px] border-slate-500">{listOrString(example)}</TableCell>
          <TableCell className="border-[1px] border-slate-500">{listOrString(output)}</TableCell>
        </TableRow>
      );
    });
  };

  return (
    <div className="mt-10">
      <div className="mb-5">
        <h1 className="text-2xl font-semibold">Open Source</h1>
        <p className="flex gap-1">
          <span>This project is open sourced in this</span>
          <a href="https://github.com/dev4ult/readme-md-editor" className="flex gap-2 items-center text-blue-400 hover:underline" target="_black">
            <span>github repository</span>
            <FaGithub />
          </a>
        </p>
      </div>

      <div>
        <h1 className="text-2xl font-semibold">Documentation</h1>
        <p className="leading-7">
          Content below is cheatsheet for markdown. (in progress, full documentation{' '}
          <a href="https://www.markdownguide.org/cheat-sheet" className="text-blue-400 hover:underline" target="_blank">
            here
          </a>
          )
        </p>
        <Table className="mt-4">
          <TableHeader>
            <TableRow>
              <TableHead className="border-[1px] border-slate-500">Element</TableHead>
              <TableHead className="border-[1px] border-slate-500">Syntax</TableHead>
              <TableHead className="border-[1px] border-slate-500">Example</TableHead>
              <TableHead className="border-[1px] border-slate-500">Output</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{TableRows()}</TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Documentation;
