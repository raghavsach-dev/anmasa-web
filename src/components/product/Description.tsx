import ReactMarkdown from "react-markdown";
import { ProductContent } from "@/app/types/Products";

export default function Description({ content }: { content: ProductContent }) {
  return (
    <div>
      <ReactMarkdown components={{
          p: ({ children }) => <p className="text-lg mt-4 text-anmasa-accent">{children}</p>
            }}>{content.description.content}</ReactMarkdown>
            <ReactMarkdown components={{
          p: ({ children }) => <p className="text-lg mt-4 text-anmasa-accent">{children}</p>
            }}>{content.health.content}</ReactMarkdown>
            <ReactMarkdown components={{
          p: ({ children }) => <p className="text-lg mt-4 text-anmasa-accent">{children}</p>
            }}>{content.info.content}</ReactMarkdown>
    </div>
  );
}