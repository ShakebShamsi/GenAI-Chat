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
      setShowSidebar
	} = useContext(Context);

    const handleCardClick = (promptText) => {
			setInput(promptText);
		};
	return (
		<div className="main">
			<div className="nav">
            <img src={assets.menu_icon} alt="" className="menu-icon" onClick={()=>setShowSidebar(true)}/>
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
									handleCardClick("Top 5 Place To Visit In Bangalore.")
								}
							>
								<p>Top 5 Place To Visit In Bangalore.</p>
								<img src={assets.compass_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() =>
									handleCardClick(
										"Explain the process of photosynthesis in short"
									)
								}
							>
								<p>Explain the process of photosynthesis in short</p>
								<img src={assets.message_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() =>
									handleCardClick("What are the key responsibilities of a frontend engineer in short?")
								}
							>
								<p>What are the key responsibilities of a frontend engineer in short?</p>
								<img src={assets.bulb_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() => {
									handleCardClick(
										"What is Gen Ai, will it replace human, in short?"
									);
								}}
							>
								<p>What is Gen Ai, will it replace human, in short?</p>
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
                  GenAI Chat may display inaccurate info, including about people, so
                     double-check its responses.
                  </p>
                  <span>Made with ❤️ by <a href="https://shakeb.onrender.com" target="_blank">Shakeb Shamsi</a></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
