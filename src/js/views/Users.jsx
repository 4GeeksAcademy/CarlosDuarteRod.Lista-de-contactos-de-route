import React, { useState, useEffect } from "react";
import image1 from "../../img/images.png";
import { Link } from "react-router-dom";

export const Users = () => {

	const [users, setUsers] = useState();
	const host = "https://jsonplaceholder.typicode.com/"

	const fetchUsers = async () => {
		const url = host + "users"
		const request = {
			method: "GET"
		}

		if (localStorage.getItem("usersLocal") !== null) {
			setUsers(JSON.parse(localStorage.getItem("usersLocal")));
		}
		else {
			const response = await fetch(url, request)
			if (response.ok) {
				const data = await response.json();
				console.log("data", data);
				setUsers(data);
				console.log("users", users)
				localStorage.setItem('usersLocal', JSON.stringify(data))
			}
			else { "Error" }
		}
	}

	useEffect(() => {
		fetchUsers();
	}, [])

	return (
		<div className="container">
			<h1 className="text-primary">Users</h1>

			{users ? users.map((item) =>
				<div className="card mb-3">
					<div className="row g-0">
						<div className="col-md-2-text-center">
							<img src={image1} className="img-fluid rounded-circle mt-3 " />
						</div>
						<div className="col-md-7">
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-subtitle"><i className="fa-solid fa-location-dot"></i> {""} {item.address.suite} {item.address.company}</p>
								<p className="card-subtitle"><i className="fa-solid fa-phone fa-rotate-270"></i>{""} {item.phone}</p>
								<p className="card-subtitle"><i className="fa-solid fa-envelope"></i>{""} {item.email}</p>
							</div>
						</div>
						<div className="col-md-3 text-end">
							<div className="card-body me-3">
								<Link to={"/users/" + item.id} className="btn btn-outline-secondary">
									<i class="fa-solid fa-user"></i>
								</Link>
							</div>
						</div>
					</div>
				</div>)
				: "Leyendo datos"}
		</div>
	);
};

