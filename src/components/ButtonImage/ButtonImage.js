import Image from "next/image"

import imgReplaceMe from "@/assets/svg/ReplaceMe.svg"
import "./ButtonImage.css"

// Пример использования
/* <ButtonImage
    src={imgButton}
    alt="button-test"
    className=""
    text="text"
    title="title"
/> */

// Кнопка с картинкой, но так же есть возможность отобразить текст после картинки
export default function ButtonImage({
    id,
    className="",
    style,
    title,
    onClick,
    src=imgReplaceMe,
    alt="button-image",
    text,
    width100,
    atStart,
    phoneTextHide,
    disabled
}) {
    // Добавляем стиль-модификатор перед передаваемыми классами
    if (width100) className = "button-image_width100 " + className // Кнопка в 100% ширины
    if (atStart) className = "button-image_atStart " + className // Контент кнопки в начале
    if (phoneTextHide) className = "button-image_phoneTextHide " + className // Контент кнопки в начале
    return (
        <button
            id={id} 
            className={`button-image ${className}`}
            style={style}
            title={title}
            onClick={onClick} 
            disabled={disabled}
        >
            <Image
                src={src}
                alt={alt}
                draggable="false"
            />

            {text && <p>{text}</p>}
        </button>
    )
}