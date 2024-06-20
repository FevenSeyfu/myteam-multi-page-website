import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitle = ({ title }) => {
  const location = useLocation();

  useEffect(() => {
    document.title = `Frontend Mentor | myteam website challenge - ${title}`;
  }, [location, title]);

  return null;
};

export default PageTitle;