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

const coverUrl = "/cover.png"

export default function AboutProject({ withoutLink=false }) {
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
                    <div className="flex-col gap-1">
                        <h2>Ежиные хроники</h2>
                        <div className="flex-row gap-1">
                            <h3 className="text-gray"
                                lang="x-hedgehog"
                                title="Название на ежином"
                            >Hedetricodes Que-hronicas</h3>
                            <Tooltip content={TitleTooltip} />
                        </div>
                    </div>

                    <div className="flex-col gap-1">
                        {!withoutLink && <p>Рейтинг: <Link className="text-link text-underline" href="/rating">ЛеФильм <strong className="text-link">10/10</strong></Link></p>}
                        <p>Страна: <span className="text-lightgray">Ежиная Республика</span></p>
                        <p>Автор идеи: <span className="text-lightgray">Эрнест Вудергорский</span></p>
                        <p>Режиссер: <span className="text-lightgray">Алексей Дедов</span></p>
                        <p>Сценарист: <span className="text-lightgray">Даниил Вудергорский</span></p>
                        <p>Жанр: <span className="text-lightgray">Приключения, комедия, фантастика</span></p>
                        <p>Период выпуска: <span className="text-lightgray">С 30 июля 2020 года по настоящее время</span></p>
                        <div className="flex-row gap-1">
                            <p>Возраст: <span className="text-lightgray">18+</span></p>
                            <Tooltip content={AgeRatingTooltip} />
                        </div>
                        <div className="flex-row gap-1">
                            <p>Входит в списки:</p>
                            <div className="flex-col gap-1">
                                <span className="text-lightgray">Значимые хроники 2020 года (1 место)</span>
                                <span className="text-lightgray">Выдающийся саундтрек 2021 года (1 место)</span>
                                <span className="text-lightgray">Лучшие комедии 2022 года (1 место)</span>
                                <span className="text-lightgray">Культовые веб-сериалы 2023 года (1 место)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-col gap-1 about-project__desc">
                    <h2>Про что сериал Ежиные хроники:</h2>
                    <p className="text-light">Сюжетный сериал по мотивам Ежиного РП, рассказывающий о событиях и персонажах вымышленного мира.
История подаётся в формате хроник, где каждая серия раскрывает отдельные эпизоды жизни героев, их конфликты, союзы и приключения.
Все события объединены общей вселенной и постепенно складываются в цельную картину происходящего.</p>
                </div>
            </div>
        </section>
    )
}