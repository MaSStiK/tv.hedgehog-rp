import Episode from "../Episode/Episode"
import { seasons } from "@/lib/series"

import "./Season.css"
import "./Season-phone.css"

// Сетка из серий сезона
export default function Season({ title, episodes, highlightId=""}) {
    return (
        <div className="season">
            <h2>{title}</h2>
            <div className="episode-list">
                {[...episodes].reverse().map((item, i) => 
                    <Episode episode={item} highlightId={highlightId} key={item.videoID} />
                )}
            </div>
        </div>
    )
}
