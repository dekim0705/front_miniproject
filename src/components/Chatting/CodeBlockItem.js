import SyntaxHighlighter from 'react-syntax-highlighter';
import { hybrid } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBlockItem = ({ code, language }) => {
  console.log("코드 블럭이 이러러러");
  return (
    <SyntaxHighlighter
      language={language}
      style={hybrid}
      showLineNumbers='true'
      wrapLines='true'
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlockItem;