import SyntaxHighlighter from 'react-syntax-highlighter';
import { hybrid } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBlockItem = ({ code, language }) => {
  return (
    <SyntaxHighlighter language={language} style={hybrid}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlockItem;