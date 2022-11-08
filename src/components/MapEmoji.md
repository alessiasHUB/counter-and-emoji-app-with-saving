interface Emoji {
    id: number;
    key: string
}

const emojis : Emoji[] = []

interface EmojiMapProps {
    emoji : Emoji
}

const EmojiMapItem = (props:EmojiMapProps) => {
    return (
        <>
            <li>{props.emoji.key}</li>
        </>
    )
}

const EmojiList = () => {
    return (
        <ul>
            {emojis.map((emoji) => {
                return <EmojiMapItem emoji={emoji} key={emoji.id} />;
            })}
        </ul>
    );
};

<EmojiList />