import React from "react";
import logo from "../asset/zenlogo.png";
import logo2 from "../asset/login_img.png";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
	return (
		<div className="main">
			<div className="container-fluid" style={{ width: "100%" }}>
				<div className=" row ">
					<div className="col">
						<img
							src={logo}
							alt="logo"
							className="img-thumbnail"
							style={{ wdith: "110px", height: "110px" }}
						/>
					</div>
					<div className="col-6">
						<form className="col-md-8 mt-5 p-3">
							<div className="form-group">
								<label
									className="form-check-label"
									for="exampleInputEmail1"
								>
									<span className="label">Email</span>
								</label>
								<input
									type="email"
									className="form-control border border-scondary rounded px-2"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="Example: johndoe@mail.com"
								/>
							</div>
							<div class="form-group">
								<label for="exampleInputPassword1">
									<span className="label">
										Password
									</span>
								</label>
								<input
									type="password"
									className="form-control border border-scondary rounded px-2"
									id="exampleInputPassword1"
									placeholder="Your password"
								/>
							</div>

							<div
								className="row mt-4"
								style={{ alignItems: "center" }}
							>
								<Link
									to="/"
									className="btn btn-primary cusColor px-2 rounded col"
								>
									<div type="submit">Login</div>
								</Link>
								<button
									type="submit"
									className="mt-4"
									style={{ border: "0px solid" }}
								>
									Forgot Password
								</button>
							</div>
						</form>
					</div>

					<div className="col-sm-4">
						<img
							src={logo2}
							alt="logo"
							className="img-fluid"
							style={{ height: "100%" }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
