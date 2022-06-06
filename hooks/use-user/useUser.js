import { useEffect, useState } from 'react';

export function useUser() {

  const [userInfos, setUserInfos] = useState({firstName:  ''});

  useEffect(() => {
   
  }, [])
  return userInfos
}
