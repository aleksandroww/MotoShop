import React, { useEffect } from 'react';
import useStorage from 'hooks/useStorage';
// Services
import { postService } from 'services';

const ProgressBar = ({ data, file, condition, brand, type, engine }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    async function fetchData() {
      await postService.createPost({
        ...data,
        url,
        condition,
        brand,
        type,
        engine,
      });
    }
    fetchData();
  }, [data, file, url, condition, brand, type, engine]);

  return <div className="progress-bar" style={{ width: progress + '%' }}></div>;
};

export default ProgressBar;
