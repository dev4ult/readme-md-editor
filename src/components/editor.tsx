import * as React from 'react';
import { useToast } from '@/components/ui/use-toast';
import { FaHeading, FaBold, FaItalic, FaStrikethrough, FaLink, FaListUl, FaListOl, FaCode } from 'react-icons/fa';
import { VscHorizontalRule } from 'react-icons/vsc';
import { FaCopy } from 'react-icons/fa6';
import { Textarea } from './ui/textarea';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { AiOutlinePicLeft, AiOutlinePicCenter, AiOutlinePicRight } from 'react-icons/ai';

type Props = {
  handleChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  handleClick: React.MouseEventHandler<HTMLElement>;
  value: string;
  handleView: React.MouseEventHandler<HTMLElement>;
  visible: boolean;
  isPreviewVisible: boolean;
};

const Editor = React.forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const { toast } = useToast();
  const { handleClick, handleChange, value, handleView, visible, isPreviewVisible } = props;

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
          <button type="button" id="code" onClick={handleClick}>
            <FaCode />
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
        </div>
        <div className="flex gap-3">
          {isPreviewVisible ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="p-2 rounded border-2 hover:bg-slate-800" onClick={CopyToClipboard}>
                  <FaCopy size="0.8rem" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy to Clipboard</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <button type="button" className="text-sm py-1 px-2 rounded border-2 hover:bg-slate-800" onClick={CopyToClipboard}>
              Copy to Clipboard
            </button>
          )}
          <div className={`flex gap-2 items-center ${isPreviewVisible ? 'hidden' : undefined}`}>
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
      <Textarea ref={ref} onChange={handleChange} value={value} className="rounded-none min-h-[40rem] px-4 py-3 text-base border-white resize-none">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger onClick={CopyToClipboard}>
              <FaCopy />
            </TooltipTrigger>
            <TooltipContent>
              <p>Copy to Clipboard</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Textarea>
    </div>
  );
});

export default Editor;
