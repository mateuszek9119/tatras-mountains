
const Article1 = (props)=>{

    const {title, author, text} = props

    const styles = {
        marginTop: 40
    }

    return(
        <article  style={styles}>
            <h3 style={{ marginBottom: 3 , textTransform: "uppercase" }} >{title}</h3>
            <span style={{
                display: "block",
                marginBottom: 10,
                fontSize: 14
                }}>{author}</span>
            <p style={{fontSize: 14, textAlign: "justify"}}>{text}</p>
        </article>
    )

}

export default Article1