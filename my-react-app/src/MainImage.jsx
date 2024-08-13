
export default function MainImage({mainimg,title,jptitle,translation,year,length}) {
    return (

        <div className="mainImageContainer">
            <div className="mainImage"></div>
            <div className="mainTitle dm-sans-bold">
                <span>{title}</span><br />
                <span>{jptitle}</span><br />
                <span className="size-small italic">{translation}</span><br />
                <span className="size-mid">{year} - {length} Min</span>
            </div>
        </div>


    );
}

