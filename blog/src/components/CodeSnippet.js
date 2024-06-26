import React from 'react';

const CodeSnippet = ({ title, code }) => {
  return (
    <section className="section">
      <h3>{title}</h3>
      <pre>
        <code>
          {code}
        </code>
      </pre>
    </section>
  );
};

export default CodeSnippet;
