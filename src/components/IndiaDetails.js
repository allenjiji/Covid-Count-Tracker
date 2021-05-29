import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Accordion, Card, Button, Table } from 'react-bootstrap'

function IndiaDetails() {
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get('https://api.covid19india.org/state_district_wise.json').then((response) => {
            setData(response.data);
        });
    }, [])

    //console.log(data);
    let state_keys = Object.keys(data)


    return (
        <div>
            <Accordion>
                {
                    state_keys.map((item, index) => {
                        let districts_info = data[item].districtData;
                        let district_keys = Object.keys(districts_info)
                        let total = { 'confirmed': 0, 'active': 0, 'deceased': 0, 'recovered': 0 }
                        district_keys.map((dist, index) => {
                            total['confirmed'] += data[item].districtData[dist].confirmed;
                            total['active'] += data[item].districtData[dist].active;
                            total['deceased'] += data[item].districtData[dist].deceased;
                            total['recovered'] += data[item].districtData[dist].recovered;
                            return null
                        })
                        return (
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="" eventKey={index}>
                                        <span><b>{item}</b> &nbsp; | &nbsp; Confirmed:{total.confirmed} &nbsp; | &nbsp; Active:{total.active} &nbsp; | &nbsp; Deceased:{total.deceased} &nbsp; | &nbsp;  Recovered:{total.recovered}</span>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={index}>
                                    <Card.Body>
                                        <Table striped bordered hover variant="dark">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>District</th>
                                                    <th>Confirmed</th>
                                                    <th>Active</th>
                                                    <th>Deceased</th>
                                                    <th>Recovered</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {district_keys.map((dist, index) => {
                                                    return (
                                                        <tr>
                                                            <td>{index + 1}</td>
                                                            <td>{dist}</td>
                                                            <td>{data[item].districtData[dist].confirmed}</td>
                                                            <td>{data[item].districtData[dist].active}</td>
                                                            <td>{data[item].districtData[dist].deceased}</td>
                                                            <td>{data[item].districtData[dist].recovered}</td>

                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>)
                    })
                }

            </Accordion>
        </div>
    )
}

export default IndiaDetails
