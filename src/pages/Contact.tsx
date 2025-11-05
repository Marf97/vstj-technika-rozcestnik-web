import ReactMarkdown from 'react-markdown';
import contact from '../content/Contact.md';

export default function Contact() {
  return (
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '2rem' }}>
        <ReactMarkdown>{contact}</ReactMarkdown>
      </div>
  );
}
