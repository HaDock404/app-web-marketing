import ComputerTeam from "./ComputerTeam"

function DashboardBox() {
    return (
        <article className="dashboard_box_article">
            <div className="dashboard_box_h1">Lancez votre site en 3 clics </div>
            <div className="dashboard_box_h3">On a tout préparé</div>
            <div className="dashboard_box_svg">
                <ComputerTeam />
            </div>
            <div className="dashboard_box_box-button">
                <div className="dashboard_box_button">Commencer</div>
            </div>
        </article>
    )
}

export default DashboardBox