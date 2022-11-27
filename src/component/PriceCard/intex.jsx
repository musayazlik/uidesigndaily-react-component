/* Style Css */

import "./style.css";

const PriceCard = () => {
	return (
		<div className="PriceCardComponent">
			<h1>Price Card</h1>
			<div className="card-context">
				<div className="card">
					<div className="price">
						<span>549, - </span>
						<p>Pay now, later or split up.</p>
					</div>
					<div className="buyButton">
						<button>Buy Online</button>
						<span>
							<b>18 in online storage</b> - can be shipped today
						</span>
					</div>
					<div className="featuresList">
						<ul>
							<li className="list-item">
								<div className="item-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="bi bi-check-lg"
										viewBox="0 0 16 16">
										<path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
									</svg>
								</div>
								<div className="item-text">
									<p>
										<a href="#">Free shippping</a>
										<span>over NOK 800</span>
									</p>
								</div>
							</li>
							<li className="list-item">
								<div className="item-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="bi bi-check-lg"
										viewBox="0 0 16 16">
										<path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
									</svg>
								</div>
								<div className="item-text">
									<b>
										<a href="">Lightning fast delivery</a>
									</b>
								</div>
							</li>
						</ul>
					</div>
					<div className="zipCode">
						<label htmlFor="zipCode">
							<b>See how fast you can get the item</b>
						</label>
						<div className="inputCheckWrapper">
							<div className="inputContext">
								<input id="zipCode" type="number" />
								<div className="inputIcon">
									<svg
										viewBox="0 0 28 28"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M11.6667 5C7.98477 5 5 7.98477 5 11.6667C5 15.3486 7.98477 18.3333 11.6667 18.3333C15.3486 18.3333 18.3333 15.3486 18.3333 11.6667C18.3333 7.98477 15.3486 5 11.6667 5ZM2 11.6667C2 6.32791 6.32791 2 11.6667 2C17.0054 2 21.3333 6.32791 21.3333 11.6667C21.3333 13.7948 20.6457 15.7623 19.4804 17.3591L25.5607 23.4393C26.1464 24.0251 26.1464 24.9749 25.5607 25.5607C24.9749 26.1464 24.0251 26.1464 23.4393 25.5607L17.3591 19.4804C15.7623 20.6457 13.7948 21.3333 11.6667 21.3333C6.32791 21.3333 2 17.0054 2 11.6667Z"
											fill="#292E5A"
										/>
									</svg>
								</div>
							</div>
							<button type="submit" className="checkButton">
								Check
							</button>
						</div>
					</div>
					<div className="pickUpInStore">
						<button>Pick up in store</button>
					</div>
				</div>
				<div className="cardBack"></div>
			</div>
		</div>
	);
};

export default PriceCard;
