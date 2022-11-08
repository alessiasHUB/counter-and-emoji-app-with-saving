import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
  const [counterValueFromCurrentRender, queueRerenderWithNewCounterValue] =
    useState("");
  const [storedValuesFromCurrentRender, queueRerenderWithNewStoredValues] =
    useState<string[]>([]);

  const handleStoreCurrentCount = () => {
    queueRerenderWithNewStoredValues([
      ...storedValuesFromCurrentRender,
      counterValueFromCurrentRender,
    ]);
  }


  const handleEmojiLove = () => {
    queueRerenderWithNewCounterValue("😍");
    emojis.push("😍");
  };
  const handleEmojiDog = () => {
    queueRerenderWithNewCounterValue("🐕");
    emojis.push("🐕");
  };
  const handleEmojiSanta = () => {
    queueRerenderWithNewCounterValue("🎅");
    emojis.push("🎅");
  };
  const handleEmojiCookie = () => {
    queueRerenderWithNewCounterValue("🍪");
    emojis.push("🍪");
  };
  const handleEmojiSkull = () => {
    queueRerenderWithNewCounterValue("💀");
    emojis.push("💀");
  };

  return (
    <>
      <h1>Emoji picker</h1>
      {/* <p>Previous emojis: {counterValueFromCurrentRender} {handleStoreCurrentCount} {storedValuesFromCurrentRender.join(", ")}</p> */}
      <p>Current emoji: {counterValueFromCurrentRender}</p>
      <button onClick={() => {handleStoreCurrentCount(); handleEmojiLove();}}>😍</button>
      <button onClick={() => {handleStoreCurrentCount(); handleEmojiDog();}}>🐕</button>
      <button onClick={() => {handleStoreCurrentCount(); handleEmojiSanta();}}>🎅</button>
      <button onClick={() => {handleStoreCurrentCount(); handleEmojiCookie();}}>🍪</button>
      <button onClick={() => {handleStoreCurrentCount(); handleEmojiSkull();}}>💀</button>
      <EmojiList />
      </>
  );
}

////// emoji element list //////
const emojis : string[] = []

const EmojiList = () => {
  return (
      <p>
        <i>Previous emojis: </i>
          {emojis.slice(-5).map((emoji) => {
              return <>{emoji}</>;
          })}
      </p>
  );
};