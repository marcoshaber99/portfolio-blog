import { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  nightOwl,
  tomorrow,
  vs,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import ContextVisualization from "./ContextVisualization";

function Table({ data }: { data: { headers: string[]; rows: string[][] } }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));
  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  let href = props.href;
  if (href?.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }
  if (href?.startsWith("#")) {
    return <a {...props} />;
  }
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props: React.ComponentProps<typeof Image>) {
  const { alt = "", ...rest } = props;
  return <Image className="rounded-lg" alt={alt} {...rest} />;
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
  return function Heading({ children }: { children: React.ReactNode }) {
    let slug = slugify(children as string);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };
}

const CodeBlock = ({
  className,
  children,
}: {
  className?: string;
  children: string;
}) => {
  const language = className
    ? className.replace(/language-/, "")
    : "javascript";
  
  if (children.includes('\n')) {
    return (
      <div className="my-6">
        <SyntaxHighlighter
          language={language}
          style={nightOwl}
          showLineNumbers={true}
          wrapLines={true}
        >
          {children}
        </SyntaxHighlighter>
      </div>
    );
  }
  
  return (
    <code className={className}>
      {children}
    </code>
  );
};

export const globalComponents: MDXComponents = {
  h1: createHeading(1) as React.ComponentType<
    React.HTMLAttributes<HTMLHeadingElement>
  >,
  h2: createHeading(2) as React.ComponentType<
    React.HTMLAttributes<HTMLHeadingElement>
  >,
  h3: createHeading(3) as React.ComponentType<
    React.HTMLAttributes<HTMLHeadingElement>
  >,
  h4: createHeading(4) as React.ComponentType<
    React.HTMLAttributes<HTMLHeadingElement>
  >,
  h5: createHeading(5) as React.ComponentType<
    React.HTMLAttributes<HTMLHeadingElement>
  >,
  h6: createHeading(6) as React.ComponentType<
    React.HTMLAttributes<HTMLHeadingElement>
  >,
  Image: RoundedImage,
  a: CustomLink,
  Table,
  ContextVisualization,


  code: ({ className, children }) => {
    const language = className ? className.replace(/language-/, "") : "";
    if (language) {
      return (
        <CodeBlock className={className}>
          {children as string}
        </CodeBlock>
      );
    }
    return <code className={className}>{children}</code>;
  },
};