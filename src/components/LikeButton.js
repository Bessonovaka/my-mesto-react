function LikeButton(props) {
    return (
        <button className={props.likeClick ? 'like-button like-button_fill_black' : 'like-button'} onClick={props.onClick} ></button>
    )
}
export default LikeButton;