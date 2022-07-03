// 사용자에게 보여줄 수 있는 메시지를 만든다.

const GetMessages = (elem) => {
  const messages = [];
  if (elem.validity.valueMissing) {
    messages.push("Value required");
  }
  if (elem.validity.typeMismatch) {
    messages.push(`Invalid ${elem.type}`);
  }
  return messages;
};

export default GetMessages;
