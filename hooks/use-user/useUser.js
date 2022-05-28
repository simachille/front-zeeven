import { useEffect, useState } from 'react';
import {useSession } from 'next-auth/react';

export function useUser() {

  const {data, status} = useSession();
  const [userInfos, setUserInfos] = useState({firstName:  ''});

  useEffect(() => {
    if (data) {
      const {token} = data;
      setUserInfos(token)
    }
  }, [status])
  return userInfos
}
