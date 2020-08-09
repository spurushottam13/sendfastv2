const DefaultStyle = {
    body: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "auto",
        zIndex: 2147483630
    },
    overlay: {
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: "100%",
        zIndex:2147483631,
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    wrapper: {
        position: "relative",
        width: '90%',
        maxWidth: '500px',
        padding: 20,
        boxSizing: "border-box",
        backgroundColor: "#fff",
        borderRadius: 3,
        zIndex: 2147483632,
        textAlign: "left",
        transform: "translate(-50%, -50%)",
        top: "50vh",
        left: "50vw",
        boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)"
    }
}

export default DefaultStyle