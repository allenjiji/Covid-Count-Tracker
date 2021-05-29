import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'

function IndiaDashboard() {
    const [total_counts, setTotal_counts] = useState({})
    useEffect(() => {
        axios.get("https://corona.lmao.ninja/v2/countries/india").then((response) => {
            setTotal_counts({
                ...total_counts,
                total_cases: response.data.cases,
                active_cases: response.data.active,
                recovered: response.data.recovered,
                deaths: response.data.deaths,
                todayDeaths: response.data.todayDeaths,
                todayRecovered: response.data.todayRecovered,
                todayCases: response.data.todayCases,
                critical:response.data.critical

            })
        })

    }, [])
    // console.log(total_counts);
    return (
        <div className="india-dashboard row">
            {/* <div className="row text-center" >
                <div className="col-md-12">
                    <img alt="FlagImagNoteAvailable" src="https://www.countryflags.io/in/shiny/64.png" />
                </div>
            </div> */}
            <div className="col-md-3">
                <Card className="badge" bg="primary" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Total Cases</Card.Title>
                        <h1>{total_counts.total_cases}</h1>
                        <Card.Subtitle className="mb-2">Today:{total_counts.todayCases}</Card.Subtitle>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-md-3">
                <Card className="badge" bg="warning" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Active Cases</Card.Title>
                        <h1>{total_counts.active_cases}</h1>
                        <Card.Subtitle className="mb-2">Critical: {total_counts.critical}</Card.Subtitle>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-md-3">
                <Card className="badge" bg="success" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Recovered</Card.Title>
                        <h1>{total_counts.recovered}</h1>

                        <Card.Subtitle className="mb-2">Today:{total_counts.todayRecovered}</Card.Subtitle>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-md-3">
                <Card className="badge" bg="danger" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Deaths</Card.Title>
                        <h1>{total_counts.deaths}</h1>

                        <Card.Subtitle className="mb-2">Today:{total_counts.todayRecovered}</Card.Subtitle>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default IndiaDashboard
