import * as React from 'react';
import { useToast } from '@/components/ui/use-toast';
import { FaHeading, FaBold, FaItalic, FaStrikethrough, FaLink, FaListUl, FaListOl, FaImage } from 'react-icons/fa';
import { VscHorizontalRule } from 'react-icons/vsc';
import { FaCopy } from 'react-icons/fa6';
import { Textarea } from './ui/textarea';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

// import { Button } from './ui/button';

type Props = {
  handleChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  handleClick: React.MouseEventHandler<HTMLElement>;
  value: string;
  visible: boolean;
};

const Editor = React.forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const { toast } = useToast();
  const { handleClick, handleChange, value, visible } = props;

  function CopyToClipboard() {
    navigator.clipboard.writeText(value);
    toast({
      title: 'Notification',
      description: 'markdown text has been copied to your clipboard',
    });
  }

  return (
    <div className={`w-full ${visible ? undefined : 'hidden'}`}>
      <div className="p-3 flex justify-between items-center gap-3">
        <div className="flex gap-3 items-center">
          <button type="button" id="heading" onClick={handleClick}>
            <FaHeading />
          </button>
          <button type="button" id="bold" onClick={handleClick}>
            <FaBold />
          </button>
          <button type="button" id="italic" onClick={handleClick}>
            <FaItalic />
          </button>
          <button type="button" id="strikethrough" onClick={handleClick}>
            <FaStrikethrough />
          </button>
          <span>|</span>
          <button type="button" id="link" onClick={handleClick}>
            <FaLink />
          </button>
          <button type="button" id="image" onClick={handleClick}>
            <FaImage />
          </button>
          <span>|</span>
          <button type="button" id="horizontal-rule" onClick={handleClick}>
            <VscHorizontalRule size="1.5rem" />
          </button>
          <button type="button" id="list-ul" onClick={handleClick}>
            <FaListUl />
          </button>
          <button type="button" id="list-ol" onClick={handleClick}>
            <FaListOl />
          </button>
          {/* <button type="button" id="list-check" onClick={handleClick}>
          <FaListCheck />
        </button> */}
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <button type="button" onClick={CopyToClipboard} className="p-2 rounded border-2 group hover:bg-slate-800">
                <FaCopy size="0.7rem" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Copy to Clipboard</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <Textarea ref={ref} onChange={handleChange} value={value} className="rounded-none min-h-[40rem] px-4 py-3 text-base border-white resize-none" />
    </div>
  );
});

export default Editor;
