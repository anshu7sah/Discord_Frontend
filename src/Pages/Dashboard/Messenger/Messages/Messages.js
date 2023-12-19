import React from "react";
import { styled } from "@mui/system";
import MessagesHeader from "./MessagesHeader";
import { useSelector } from "react-redux";
import Message from "./Message";
import DateSeparator from "./DateSeparator";
const MainContainer = styled("div")({
  height: "calc(100% - 60px)",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const convertDateToHumanReadable = (date, format) => {
  const map = {
    mm: date.getMonth() + 1,
    dd: date.getDate(),
    yy: date.getFullYear().toString().slice(-2),
    yyyy: date.getFullYear(),
  };
  return format.replace(/mm|dd|yy|yyy/gi, (matched) => map[matched]);
};
const checkSameDay = (date1, date2) => {
  return (
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

const Messages = () => {
  const { chosenChatDetails, messages } = useSelector((e) => e.chats);
  return (
    <MainContainer>
      <MessagesHeader name={chosenChatDetails?.name} />
      {messages.map((mes, index) => {
        const sameAuthor =
          index > 0 && messages[index - 1].author._id === mes.author._id;
        const sameDay =
          index > 0 &&
          checkSameDay(new Date(mes.date), new Date(messages[index - 1].date));

        return (
          <div key={mes._id} style={{ width: "97%" }}>
            {(!sameDay || index === 0) && (
              <DateSeparator
                date={convertDateToHumanReadable(
                  new Date(mes.date),
                  "dd/mm/yy"
                )}
              />
            )}
            <Message
              content={mes.content}
              username={mes.author.username}
              sameAuthor={sameAuthor}
              date={convertDateToHumanReadable(new Date(mes.date), "dd/mm/yy")}
              sameDay={sameDay}
            />
          </div>
        );
      })}
    </MainContainer>
  );
};

export default Messages;
