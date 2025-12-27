import Episode from "../Episode/Episode"

import "./Season.css"
import "./Season-phone.css"

export default function Season({ title, episodes, highlightId=""}) {
    return (
        <div className="season">
            <h2>{title}</h2>
            <div className="episode-list">
                {episodes.map((item, i) => 
                    <Episode episode={item} highlightId={highlightId} key={i} />
                )}
            </div>
        </div>
    )
}
