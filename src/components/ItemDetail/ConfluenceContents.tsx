import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ConfluenceContentsProps {
  pageId: string;
}

const ConfluenceContents: React.FC<ConfluenceContentsProps> = ({ pageId }) => {
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    const fetchContent = async () => {
      const url = `https://your-confluence-domain/rest/api/content/${pageId}?expand=body.view`;
      try {
        const response = await axios.get(url, {
          headers: {
            'Authorization': 'Basic ' + btoa('username:password'), // Basic Auth, 필요에 따라 변경
            'Content-Type': 'application/json'
          }
        });
        const pageContent = response.data.body.view.value;
        setContent(pageContent);
      } catch (error) {
        console.error('Error fetching Confluence content:', error);
      }
    };

    fetchContent();
  }, [pageId]);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: content }}
      style={{ width: '100%', height: '100vh', overflow: 'auto' }}
    />
  );
};

export default ConfluenceContents;
