import ShortInfo from "./ShortInfo";
import RainbowStory from "./RainbowStory";

export default function Description() {
    return (
        <>
            <div id="description" className="dm-sans-bold">
                <ShortInfo />
                <RainbowStory name="Mipan" />
            </div>
        </>

    );
}
