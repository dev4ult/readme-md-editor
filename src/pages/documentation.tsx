import { Table, TableBody, TableHeader, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { FaGithub } from 'react-icons/fa';

const Documentation = () => {
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
          Content below is cheatsheet for markdown. (on progress, full documentation{' '}
          <a href="https://www.markdownguide.org/cheat-sheet" className="text-blue-400 hover:underline" target="_blank">
            here
          </a>
          )
        </p>
        <Table className="mt-4">
          <TableHeader>
            <TableRow>
              <TableHead>Element</TableHead>
              <TableHead>Syntax</TableHead>
              <TableHead>Example</TableHead>
              <TableHead>Output</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Heading</TableCell>
              <TableCell>
                <ul>
                  <li>#</li>
                  <li>##</li>
                  <li>###</li>
                </ul>
              </TableCell>
              <TableCell>
                <ul>
                  <li># This is Heading 1</li>
                  <li>## This is Heading 2</li>
                  <li>### This is Heading 3</li>
                </ul>
              </TableCell>
              <TableCell>
                <h1 className="text-2xl font-bold">This is Heading</h1>
                <h2 className="text-xl font-semibold">This is Heading</h2>
                <h3 className="text-lg font-semibold">This is Heading</h3>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bold</TableCell>
              <TableCell>****</TableCell>
              <TableCell>**Bold Text**</TableCell>
              <TableCell>
                <strong>Bold Text</strong>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Documentation;
