import React from 'react';

// Renders article paragraphs written with a light markdown subset:
// "**Heading**" on its own line → h2, "**bold** rest" → paragraph with bold lead.
const renderInline = (line) => {
  const parts = line.split('**');
  return parts.map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part));
};

const ArticleBody = ({ content }) => (
  <div className="prose-firm">
    {content.map((block, i) =>
      block.split('\n').map((line, j) => {
        const key = `${i}-${j}`;
        if (!line.trim()) return null;
        if (/^\*\*[^*]+\*\*:?$/.test(line.trim())) {
          return <h2 key={key}>{line.replace(/\*\*/g, '').replace(/:$/, '')}</h2>;
        }
        return <p key={key}>{renderInline(line)}</p>;
      })
    )}
  </div>
);

export default ArticleBody;
