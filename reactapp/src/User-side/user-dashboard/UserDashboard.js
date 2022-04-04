import React,{useState,useEffect} from "react";
import { Link} from 'react-router-dom';
import axios from "axios";
import UserNavbar from '../user-navbar/UserNavbar'
import './UserDashboard.css';




export default function Dashboard(){
    const [posts,setPosts] = useState([]);

    ;

    

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    })

    return(
        <><UserNavbar />
                <div id='userDashboard'>
                    <table id='dashboard-table'>
                        <tbody>
                            {posts.map(post => (
                                <><Link to='./user/companyDetail'><tr id='dashboard-tr' key={post.id}><td id='dashboard-td'>{post.name}</td>
                                    <td id='dashboard-td'>{post.website}</td>
                                    <td id='dashboard-td'>{post.phone}</td></tr></Link></>
                            ))}
                        </tbody>
                    </table>
                </div></>
    )
}