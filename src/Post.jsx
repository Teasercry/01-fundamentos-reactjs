export function Post (props) {
    return (
        <div>
            <strong>Author: {props.author}</strong>
            <p>Comment: {props.comment}</p>
            <hr/>
        </div>
    )
}