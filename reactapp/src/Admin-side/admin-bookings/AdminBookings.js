import React, {useEffect, useState} from "react";
import AdminNavbar from '../admin-navbar/AdminNavbar';
import './AdminBookings.css';
import axios from 'axios';
export default function AdminBookings(){

    const [data, setData] = useState([]);

     useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
        
            setData(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    })

    return(
        <><AdminNavbar />
        <div id='adminBookings'>
            <table id='bookingList'>
                <tr id='adminbookings-tr'>
                    <th id='adminbookings-th'>Booking ID</th>
                    <th id='adminbookings-th'>User ID</th>
                    <th id='adminbookings-th'>Event Date</th>
                    <th id='adminbookings-th'>Hall Price</th>
                    <th id='adminbookings-th'>Days</th>
                    <th id='adminbookings-th'>Total Price</th>
                </tr>
                <tbody>
                {
                    data.map(post => (
                        <><tr id='adminbookings-tr'><td id='adminbookings-td'>{post.id   }</td>
                        <td id='adminbookings-td'>{post.website}</td>
                        <td id='adminbookings-td'>{post.phone}</td>
                        <td id='adminbookings-td'>{post.username}</td>
                        <td id='adminbookings-td'>{post.email}</td>
                        <td id='adminbookings-td'>{post.name}</td>
                        </tr></>
                    ))
                }
                 
                </tbody>
            </table>
        </div></>
    )
}