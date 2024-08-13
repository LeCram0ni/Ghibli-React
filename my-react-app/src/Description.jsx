import React from 'react';
import ShortInfo from "./ShortInfo";
import RainbowStory from "./RainbowStory";

export default function Description({shortinfo, story}) {
    return (
        <>
            <div id="description" className="dm-sans-bold">
                <ShortInfo shortinfo={shortinfo} />
                <RainbowStory story={story} />
            </div>
        </>

    );
}

