import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/Context";
const Main = () => {
	const {
		onSent,
		recentPrompt,
		showResults,
		loading,
		resultData,
		setInput,
		input,
	} = useContext(Context);

    const handleCardClick = (promptText) => {
			setInput(promptText);
		};
	return (
		<div className="main">
			<div className="nav">
				<p>GenAI Chat</p>
				<img src={assets.user_icon} alt="" />
			</div>
			<div className="main-container">
				{!showResults ? (
					<>
						<div className="greet">
							<p>
								<span>Hello, Dev! </span>
							</p>
							<p>How Can I Help You Today?</p>
						</div>
						<div className="cards">
							<div
								className="card"
								onClick={() =>
									handleCardClick("Suggest Some Place To Visit In India.")
								}
							>
								<p>Suggest Some Place To Visit In Bangalore.</p>
								<img src={assets.compass_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() =>
									handleCardClick(
										"Explain the process of photosynthesis in simple terms"
									)
								}
							>
								<p>What is JSX in React? </p>
								<img src={assets.message_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() =>
									handleCardClick("How do you create a responsive navbar using CSS and JavaScript?")
								}
							>
								<p>How can you implement a mobile-friendly navbar using CSS and JavaScript?</p>
								<img src={assets.bulb_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() => {
									handleCardClick(
										"What are some essential skills for becoming a front-end developer?"
									);
								}}
							>
								<p>Which core skills should one focus on to build a strong front-end development career?</p>
								<img src={assets.code_icon} alt="" />
							</div>
						</div>
					</>
				) : (
					<div className="result">
						<div className="result-title">
							<img src={assets.user_icon} alt="" className="user-icon"/>
							<p>{recentPrompt}</p>
						</div>
						<div className="result-data">
							<img src={assets.favicon} alt="" width="7px" className="bot-icon"/>
							{loading ? (
								<div className="loader">
									<hr />
									<hr />
								</div>
							) : (
								<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
							)}
						</div>
					</div>
				)}

				<div className="main-bottom">
					<div className="search-box">
						<input
							onChange={(e) => {
								setInput(e.target.value);
                     }}
                     onKeyDown={(e) => {
                        if (e.key === "Enter") {
                           onSent();
                           setInput("")
                        }
                    }}
							value={input}
							type="text"
							placeholder="Enter the Prompt Here"
						/>
						<div>
							<img src={assets.gallery_icon} alt="" />
							<img src={assets.mic_icon} alt="" />
							<img
								src={assets.send_icon}
								alt=""
								onClick={() => {
                           onSent() &&
                           setInput("")
                        }}
							/>
						</div>
					</div>
					<div className="bottom-info">
						<p>
							Gemini may display inaccurate info, including about people, so
							double-check its responses. Your privacy & Gemini Apps
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
