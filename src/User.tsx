import { useParams } from "react-router";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './User.css';

type Geo = {
    lat: string,
    lng: string
}

type Address = {
    city: string,
    street: string,
    suite: string,
    zipcode: string,
    geo: Geo
}

type Company = {
    bs: string,
    catchPhrase: string,
    name: string
}

type User = {
    company: Company,
    address: Address,
    email: string,
    id: number,
    name: string,
    phone: string,
    username: string,
    website: string
}

export default function User() {
    const params = useParams();
    const [user, setUser] = useState<User>();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
            .then(response => response.json())
            .then(data => {setUser(data); console.log(data)})
            .catch(error => console.log(error));
        return () => {
            
        }
    }, [params.userId])

    if (!user) return <></>
    return (
        <div className="container">
            <Link to="/">Back to Home</Link>
            <div className="box">
                <h1>User Information</h1>
                <p><strong>Street:</strong> {user.address.street}</p>
                <p><strong>Suite:</strong> {user.address.suite}</p>
                <p><strong>City:</strong> {user.address.city}</p>
                <p><strong>Zipcode:</strong> {user.address.zipcode}</p>
                <p><strong>Latitude:</strong> {user.address.geo.lat}</p>
                <p><strong>Longitude:</strong> {user.address.geo.lng}</p>
                <p><strong>Company Name:</strong> {user.company.name}</p>
                <p><strong>Company Business:</strong> {user.company.bs}</p>
                <p><strong>Company Catch Phrase:</strong> {user.company.catchPhrase}</p>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>User Name:</strong> {user.username}</p>
                <p><strong>Phone Number:</strong> {user.phone}</p>
                <p><strong>Website:</strong> {user.website}</p>
                <p><strong>Email:</strong> {user.email}</p>
            </div>
        </div>
    )
}