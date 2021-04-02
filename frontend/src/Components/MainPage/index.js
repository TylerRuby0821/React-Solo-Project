import Sidebar from '../Sidebar'


function MainPage () {
    return (
        <div>
            <Sidebar />
            <h2> Hello! </h2>
            <div>
                <section>
                    <h2> Notes </h2>
                </section>
                <section>
                    {/* <Notes /> */}
                </section>
            </div>
        </div>
    )
}

export default MainPage
