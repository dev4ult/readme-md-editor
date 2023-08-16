type CustomTagProps = {
  children: React.ReactNode | React.ReactNode[] | string;
};

type CustomAnchorProps = {
  children: React.ReactNode | React.ReactNode[] | string;
  href?: string | undefined;
};

const CustomH1 = ({ children }: CustomTagProps) => <h1 className="scroll-m-20 border-b pb-2 mb-4 text-3xl font-bold tracking-tight transition-colors first:mt-0">{children}</h1>;

const CustomH2 = ({ children }: CustomTagProps) => (
  <div className="mt-6 mb-4">
    <h2 className="scroll-m-20 text-2xl pb-2 font-semibold tracking-tight">{children}</h2>
    <hr />
  </div>
);

const CustomH3 = ({ children }: CustomTagProps) => <h3 className="scroll-m-20 text-xl mb-2 mt-4 font-semibold tracking-tight">{children}</h3>;

const CustomHR = () => <hr className="mb-4" />;

const CustomParagraph = ({ children }: CustomTagProps) => <p className="leading-7 mb-4">{children}</p>;

const CustomAnchor = ({ children, href }: CustomAnchorProps) => (
  <a href={href} className="text-blue-400 hover:underline">
    {children}
  </a>
);

const CustomPre = ({ children }: CustomTagProps) => <pre className="bg-slate-800 rounded w-full my-3">{children}</pre>;

const CustomCode = ({ children }: CustomTagProps) => <div className="px-3 py-2 bg-slate-800 rounded w-full font-mono">{children}</div>;

const CustomBlockquote = ({ children }: CustomTagProps) => <blockquote className="text-sm border-l-4 border-slate-600 pl-2">{children}</blockquote>;

const CustomOl = ({ children }: CustomTagProps) => <ol className="list-decimal ml-5">{children}</ol>;

const CustomUl = ({ children }: CustomTagProps) => <ul className="list-disc ml-5">{children}</ul>;

// const CustomCl = ({ children }: CustomTagProps) => <ul className="ml-5">{children}</ul>;

export { CustomH1, CustomH2, CustomH3, CustomParagraph, CustomAnchor, CustomPre, CustomCode, CustomBlockquote, CustomOl, CustomUl, CustomHR };
