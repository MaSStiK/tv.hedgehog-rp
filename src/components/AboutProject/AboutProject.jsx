import Link from "next/link"
import Image from "next/image"
import Tooltip from "../Tooltip/Tooltip"

import "./AboutProject.css"

const TitleTooltip = (
    <div>
        <p>Ежиный: Hedetricodes Que-hronicas</p>
        <p>Эрикградский: Ezh Chkroni</p>
        <p>Римский: Hedgehog Paralipomenon</p>
    </div>
)

export default function AboutProject() {
    return (
        <section>
            <div className="about-project">
                <div className="flex-col">
                    <div className="about-project__cover">
                        <Image
                            src="/cover.png"
                            alt="Ежиные хроники"
                            width={400}
                            height={400}
                        />
                    </div>
                    <Link className="button width100" href="/cover.png" target="_blank" rel="noopener noreferrer">Открыть постер</Link>
                </div>
                
                <div className="flex-col">
                    <div className="flex-col gap-tiny">
                        <h2>Ежиные хроники</h2>
                        <div className="flex-row gap-tiny">
                            <h3 className="text-gray about-project__alt-title"
                                lang="x-hedgehog"
                                title="Название на ежином"
                            >Hedetricodes Que-hronicas</h3>
                            <Tooltip content={TitleTooltip} />
                        </div>
                    </div>

                    <div className="flex-col gap-tiny">
                        <p>Страна: <span className="text-lightgray">Ежиная Республика</span></p>
                        <p>Режиссеры: <span className="text-lightgray">Даниил Вудергорский и Эрнест Вудергорский</span></p>
                        <p>Жанр: <span className="text-lightgray">Приключения, комедия, фантастика</span></p>
                        <p>Период выпуска: <span className="text-lightgray">С 30 июля 2020 года по настоящее время.</span></p>
                        <p>По мотивам Ежиного РП</p>
                    </div>

                    <div className="flex-col gap-tiny">
                        <h2>Про что сериал Ежиные хроники:</h2>
                        <p className="about-project__description text-light">«Ежиные хроники» — сюжетный сериал о событиях и персонажах вымышленного мира Ежиного РП.
История подаётся в формате хроник, где каждая серия раскрывает отдельные эпизоды жизни
героев, их конфликты, союзы и приключения. Все события объединены общей вселенной
и постепенно складываются в цельную картину происходящего.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}