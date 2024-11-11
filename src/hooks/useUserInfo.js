import { useEffect, useState } from 'react';
import axios from 'axios';

function useUserInfo() {
  const [userInfo, setUserInfo] = useState(null);

  const isLoading = userInfo === null;

  useEffect(() => {
    // axios.post("/");
  }, []);

  return {
    isLoading,
  };
}
