export default function Player({state}) {
    console.log("state-------", state)
    return (
        <iframe
            width="100%"
            className="aspect-video"
            src={state.link}
            title="Some video title"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    );
}
