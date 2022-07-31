import React from "react";
import "./WelcomeScreen.css";

function WelcomeScreen(props) {
    return props.showWelcomeScreen ? (
        <div className="WelcomeScreen">
            <div className="inner-wrapper">
                <h1>
                    Meetup App
                </h1>
                <h4>Welcome to the MeetUp App!</h4>
                <p>
                    Sign in to see upcoming events around the world for full-stack
                    developers.
                </p>
                <div className="button_cont" align="center">
                    <div className="google-btn">
                        <div className="google-icon-wrapper">
                            <img
                                className="google-icon"
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="Google sign-in"
                            />
                        </div>
                        <button
                            onClick={() => {
                                props.getAccessToken();
                            }}
                            rel="nofollow noopener"
                            className="btn-text"
                        >
                            Sign in with Google
                        </button>
                    </div>
                </div>
                <a
                    href="https://Priyanka-koraganji.github.io/meet-project/privacy.html"
                    rel="nofollow noopener"
                >
                    Privacy policy
                </a>
            </div>
        </div>
    ) : null;
}

export default WelcomeScreen;
