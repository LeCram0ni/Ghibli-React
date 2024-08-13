
export default function MainImage({mainimg,title,jptitle,translation,year,length}) {
    return (

        <div className="mainImageContainer">
            <div className="mainImage"></div>
            <div className="mainTitle dm-sans-bold">
                <span>{title}</span><br />
                <span>思い出のマーニー</span><br />
                <span className="size-small">(Marnie of [My] Memories)</span><br />
                <span className="size-mid">2014 - 103 Min</span>
            </div>
        </div>


    );
}

