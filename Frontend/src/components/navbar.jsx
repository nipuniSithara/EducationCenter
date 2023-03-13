
export const NavBar = () => {
    return (
        <div className="d-flex flex-row justify-content-between navbar">
            <div className="col-8">home, notification,chat</div>
            <div className="col-4 d-flex flex-row justify-content-end">
                <div className="col">Username</div>
                <div className="col">Logout</div>
            </div>
        </div>
    )
}