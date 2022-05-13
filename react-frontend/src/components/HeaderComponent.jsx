import React, { Component } from 'react'

export default class HeaderComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg bg-dark  navbar-dark">
                        <a className="navbar-brand" href="/"><h3>CBSL</h3></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link " href="/banks">Banks</a>
                                <a className="nav-link" href="/persons">Persons</a>

                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}
