import Button from './Button';


function Card({
    className, onReadMore,
    title, pic,
    alt, text, customContent,
    linkText,
}) {



    return (
        <div className={className}>
            <div className={`${className}__content`}>
                <h3 className={`${className}__title`}>{title}</h3>
                <img className={`${className}__pic`} alt={alt} src={pic} />
                {customContent ? (
                    customContent
                ) : (
                    <p className={`${className}__text`}>{text}</p>
                )}
            </div>


            <div className={`${className}__actions`}>
                <Button className={`${className}__link`}
                    onClick={onReadMore}
                    aria-label={`Read More about ${title}`}
                >{linkText}
                </Button>
            </div>
        </div >
    )
}

export default Card;