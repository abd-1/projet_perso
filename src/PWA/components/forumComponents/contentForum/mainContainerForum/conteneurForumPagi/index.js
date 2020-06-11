import React from 'react';
import BlocPagi from './blocPagi';
import BlocMessageOdd from './blocMessage/blocMessageOdd';
import BlocMessageEven from './blocMessage/blocMessageEven';
import { useSelector } from 'react-redux';

const ConteneurMessagePagi = () => {
  const messageState = useSelector(state => state.message.messages);

  const afficheMsg = messageState.map((item, idx) =>
    idx % 2 === 0 ? (
      <BlocMessageOdd
        key={`${item.message}/${item.dateMsg}`}
        img={item.img}
        pseudo={item.pseudo}
        dateMsg={item.dateMsg}
        msg={item.message}
      ></BlocMessageOdd>
    ) : (
      <BlocMessageEven
        key={(item.message, item.dateMsg)}
        img={item.img}
        pseudo={item.pseudo}
        dateMsg={item.dateMsg}
        msg={item.message}
      ></BlocMessageEven>
    )
  );

  return (
    <div>
      <BlocPagi></BlocPagi>

      {afficheMsg}

      <BlocPagi></BlocPagi>
    </div>
  );
};

export default ConteneurMessagePagi;
