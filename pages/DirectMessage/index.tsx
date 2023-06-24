import React, { useCallback } from 'react';
import { Container, Header } from './styles';
import gravatar from 'gravatar';
import useSWR, { useSWRInfinite } from 'swr';
import fetcher from '@utils/fetcher';
import { useParams } from 'react-router';
import useInput from '@hooks/useInput';
import ChatBox from '@components/ChatBox';
import axios from 'axios';
import { IDM } from '@typings/db';

const DirectMessage = () => {
  const { workspace, id } = useParams<{ workspace: string; id: string }>();
  const [chat, onChangeChat, setChat] = useInput('');

  // 상대 유저 정보
  const { data: userData } = useSWR(`/api/workspaces/${workspace}/users/${id}`, fetcher);

  // 내 정보
  const { data: myData } = useSWR('/api/users', fetcher);

  // 채팅 정보
  const {
    data: chatData,
    mutate: mutateChat,
    revalidate,
    setSize,
  } = useSWRInfinite<IDM[]>(
    (index) => `/api/workspaces/${workspace}/dms/${id}/chats?perPage=20&page=${index + 1}`,
    fetcher,
  );

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();

      console.log('chat: ', chat);

      if (chat?.trim()) {
        axios
          .post(`/api/workspaces/${workspace}/dms/${id}/chats`, {
            content: chat,
          })
          .then(() => {
            setChat('');
            revalidate();
          })
          .catch(console.error);
      }
    },
    [chat],
  );

  if (!userData || !myData) {
    return null;
  }

  return (
    <Container>
      <Header>
        <img src={gravatar.url(userData.email, { s: '28px', d: 'retro' })} alt={userData.nickname} />
      </Header>
      <ChatBox chat={chat} onChangeChat={onChangeChat} onSubmitForm={onSubmitForm} />
    </Container>
  );
};

export default DirectMessage;
