export default function Card({
    degree = "none",
    colour = "purple",
    font = "0",
    display= "flex",
    alignItems = "center",
    borderBottom = "1px solid white",
    image = "icon/personTwo.png"
}) {
    return (
        <div style={{backgroundColor: colour, fontSize: font, display: display, alignItems: alignItems, borderBottom: borderBottom}}>
            {
                colour === "#0885ff33" ? <img src={'icon/business.png'} width="50"/> :
                colour === "#294b65" ? <img src={'icon/computer.png'} width="50"/> :  <img src={image} width="50"/>

            }
            {degree}
        </div>
    )
}