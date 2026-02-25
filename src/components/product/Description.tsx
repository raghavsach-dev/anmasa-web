import ReactMarkdown from "react-markdown";
import { ProductContent } from "@/app/types/Products";

export default function Description({
  content,
}: {
  content?: ProductContent | null;
}) {
  if (!content) {
    return null;
  }

  const description = content.description?.content ?? "";
  const health = content.health?.content ?? "";
  const info = content.info?.content ?? "";

  return (
    <div>
      {description && (
        <ReactMarkdown
          components={{
            p: ({ children }) => (
              <p className="text-lg mt-4 text-anmasa-accent">{children}</p>
            ),
          }}
        >
          {description}
        </ReactMarkdown>
      )}
      {health && (
        <ReactMarkdown
          components={{
            p: ({ children }) => (
              <p className="text-lg mt-4 text-anmasa-accent">{children}</p>
            ),
          }}
        >
          {health}
        </ReactMarkdown>
      )}
      {info && (
        <ReactMarkdown
          components={{
            p: ({ children }) => (
              <p className="text-lg mt-4 text-anmasa-accent">{children}</p>
            ),
          }}
        >
          {info}
        </ReactMarkdown>
      )}
    </div>
  );
}