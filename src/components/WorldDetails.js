import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'

function WorldDetails() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://corona.lmao.ninja/v2/countries').then(
            (response) => {
                setData(response.data)
                console.log(response.data[0]);
            }
        )

    }, [])
    return (
        <div>
            <h1 className="text-center p-4">Covid-19 over the Globe</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Country</th>
                        <th>Cases</th>
                        <th>Active</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                        <th>Critical</th>


                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.country}</td>
                                    <td>{item.cases}</td>
                                    <td>{item.active}</td>
                                    <td>{item.deaths}</td>
                                    <td>{item.recovered}</td>
                                    <td>{item.critical}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>

        </div>
    )
}

export default WorldDetails
