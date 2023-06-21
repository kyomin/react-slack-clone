import React, { FC, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';

const Workspace: FC = ({ children }) => {
  const { data, error, revalidate } = useSWR('/api/users', fetcher);

  const onLogout = useCallback(() => {
    axios
      .post('/api/users/logout', null, {
        withCredentials: true,
      })
      .then((response) => {
        revalidate();
      });
  }, []);

  if (!data) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <button onClick={onLogout}>로그아웃</button>

      {/* 해당 태그로 감싼 내부가 이 곳에 삽입된다. */}
      {children}
    </div>
  );
};

export default Workspace;
