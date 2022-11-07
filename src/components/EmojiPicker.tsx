import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
  const [counterValueFromCurrentRender, queueRerenderWithNewCounterValue] =
    useState("");
  const [favouriteValueFromCurrentRender, queueRerenderWithNewFavouriteValue] =
    useState("");

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

// storing function
  const handleShowPrevious = () => {
    queueRerenderWithNewFavouriteValue(counterValueFromCurrentRender);
  };

  return (
    <>
      <h1>Emoji picker</h1>
      <p>Previous emoji: {favouriteValueFromCurrentRender}</p>
      <p>Current emoji: {counterValueFromCurrentRender}</p>
      <button onClick={() => {handleShowPrevious(); handleEmojiLove();}}>😍</button>
      <button onClick={() => {handleShowPrevious(); handleEmojiDog();}}>🐕</button>
      <button onClick={() => {handleShowPrevious(); handleEmojiSanta();}}>🎅</button>
      <button onClick={() => {handleShowPrevious(); handleEmojiCookie();}}>🍪</button>
      <button onClick={() => {handleShowPrevious(); handleEmojiSkull();}}>💀</button>
    </>
  );
}
