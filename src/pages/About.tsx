import ReactMarkdown from 'react-markdown';
import about from '../content/About.md';

export default function About() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '2rem' }}>
      <ReactMarkdown>{about}</ReactMarkdown>
    </div>
  );
}
