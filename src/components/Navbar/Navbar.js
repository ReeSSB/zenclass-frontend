import React from "react";
import "./Navbar.css";
import logo from "../../asset/zenlogo.png";
import { SiGoogleclassroom } from "react-icons/si";
import { MdOutlineSpaceDashboard, MdQueryBuilder } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { RiNewspaperFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<div>
				<div class="row  ">
					<div className="col-sm-4 firstCol">
						<img src={logo} alt="logo" className="logo" />
						<div className="all-icon-name-group">
							<div className="icon-box">
								<span className="icons">
									<Link
										to={"/class"}
										className="li-icon"
									>
										<div className="icon-bluebox"></div>
										<SiGoogleclassroom className="common-icon-class" />
										<div className="icon-name">
											Class
										</div>
									</Link>
								</span>
								<span className="icons">
									<Link
										to="/dashboard"
										className="li-icon"
									>
										<MdOutlineSpaceDashboard className="common-icon-class" />
										<div className="icon-name">
											Dashboard
										</div>
									</Link>
								</span>
								<span className="icons">
									<Link
										to="/task"
										className="li-icon"
									>
										<FaTasks className="common-icon-class" />
										<div className="icon-name">
											Task
										</div>
									</Link>
								</span>
								<span className="icons">
									<Link
										to="/hackathon"
										className="li-icon"
									>
										<FaTasks className="common-icon-class" />
										<div className="icon-name">
											Hackathon
										</div>
									</Link>
								</span>
								<span className="icons">
									<Link
										to="/capstone"
										className="li-icon"
									>
										<FaTasks className="common-icon-class" />
										<div className="icon-name">
											Capstone
										</div>
									</Link>
								</span>
								<span className="icons">
									<Link
										to="/queries"
										className="li-icon"
									>
										<MdQueryBuilder className="common-icon-class" />
										<div className="icon-name">
											Queries
										</div>
									</Link>
								</span>
								<span className="icons">
									<Link
										to="/requirements"
										className="li-icon"
									>
										<IoIosPaper className="common-icon-class" />
										<div className="icon-name">
											Requirements
										</div>
									</Link>
								</span>
								<span className="icons">
									<Link
										to="/application"
										className="li-icon"
									>
										<RiNewspaperFill className="common-icon-class" />
										<div className="icon-name">
											Applications
										</div>
									</Link>
								</span>
								<span className="icons">
									<Link
										to="/interview"
										className="li-icon"
									>
										<FaTasks className="common-icon-class" />
										<div className="icon-name">
											Interviewtasks
										</div>
									</Link>
								</span>
								<span className="icons">
									<Link
										to="/leave"
										className="li-icon"
									>
										<FaTasks className="common-icon-class" />
										<div className="icon-name">
											Leave-Application
										</div>
									</Link>
								</span>
								<span className="icons">
									<Link
										to="/mockinterview"
										className="li-icon"
									>
										<MdOutlineSpaceDashboard className="common-icon-class" />
										<div className="icon-name">
											Mock-Interview
										</div>
									</Link>
								</span>
								<span className="icons">
									<Link
										to="/certificate"
										className="li-icon"
									>
										<MdOutlineSpaceDashboard className="common-icon-class" />
										<div className="icon-name">
											Certificate
										</div>
									</Link>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
