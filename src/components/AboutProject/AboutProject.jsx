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

const AgeRatingTooltip = (
    <div>
        <p>В видео могут присутствовать сцены и выражения, содержащие ненормативную лексику.</p>
        <p>Автор не преследовал цели кого-либо оскорбить.</p>
    </div>
)

const coverUrl = "/cover-v2.png"

export default function AboutProject() {
    return (
        <section>
            <div className="about-project">
                <Link className="about-project__cover" href={coverUrl} target="_blank" rel="noopener noreferrer">
                    <Image
                        src={coverUrl}
                        alt="Ежиные хроники"
                        width={400}
                        height={400}
                        priority
                    />
                </Link>
                
                <div className="flex-col about-project__info">
                    <div className="flex-col gap-tiny">
                        <h2>Ежиные хроники</h2>
                        <div className="flex-row gap-tiny">
                            <h3 className="text-gray"
                                lang="x-hedgehog"
                                title="Название на ежином"
                            >Hedetricodes Que-hronicas</h3>
                            <Tooltip content={TitleTooltip} />
                        </div>
                    </div>

                    <div className="flex-col gap-tiny">
                        <p>Рейтинг: <Link className="text-lightgray text-underline" href="/rating">Oleg Films</Link></p>
                        <p>Страна: <span className="text-lightgray">Ежиная Республика</span></p>
                        <p>Режиссеры: <span className="text-lightgray">Даниил Вудергорский и Эрнест Вудергорский</span></p>
                        <p>Жанр: <span className="text-lightgray">Приключения, комедия, фантастика</span></p>
                        <p>Период выпуска: <span className="text-lightgray">С 30 июля 2020 года по настоящее время</span></p>
                        <div className="flex-row gap-tiny">
                            <p>Возраст: <span className="text-lightgray">18+</span></p>
                            <Tooltip content={AgeRatingTooltip} />
                        </div>
                        <p>По мотивам Ежиного РП</p>
                    </div>
                </div>

                <div className="flex-col gap-tiny about-project__desc">
                    <h2>Про что сериал Ежиные хроники:</h2>
                    <p className="text-light">Сюжетный сериал о событиях и персонажах вымышленного мира Ежиного РП.
История подаётся в формате хроник, где каждая серия раскрывает отдельные эпизоды жизни героев, их конфликты, союзы и приключения.
Все события объединены общей вселенной и постепенно складываются в цельную картину происходящего.</p>
                </div>
            </div>
        </section>
    )
}