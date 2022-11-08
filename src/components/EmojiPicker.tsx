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
  };
  const handleEmojiDog = () => {
    queueRerenderWithNewCounterValue("🐕");
  };
  const handleEmojiSanta = () => {
    queueRerenderWithNewCounterValue("🎅");
  };
  const handleEmojiCookie = () => {
    queueRerenderWithNewCounterValue("🍪");
  };
  const handleEmojiSkull = () => {
    queueRerenderWithNewCounterValue("💀");
  };

  return (
    <>
      <h1>Emoji picker</h1>
      <p>Previous emojis: {counterValueFromCurrentRender} {handleStoreCurrentCount} {storedValuesFromCurrentRender.join(", ")}</p>
      <p>Current emoji: {counterValueFromCurrentRender}</p>
      <button onClick={() => {handleStoreCurrentCount(); handleEmojiLove();}}>😍</button>
      <button onClick={() => {handleStoreCurrentCount(); handleEmojiDog();}}>🐕</button>
      <button onClick={() => {handleStoreCurrentCount(); handleEmojiSanta();}}>🎅</button>
      <button onClick={() => {handleStoreCurrentCount(); handleEmojiCookie();}}>🍪</button>
      <button onClick={() => {handleStoreCurrentCount(); handleEmojiSkull();}}>💀</button>
      </>
  );
}
