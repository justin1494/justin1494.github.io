import React from "react";

// styles
import styled, { keyframes } from "styled-components";

// animations
import { bounceInRight } from "react-animations";

const ProjectsCard = () => {
	const projects = [
		{
			title: `Mutli-step form`,
			href: `https://marvelous-raindrop-cd438e.netlify.app`,
			description: `(ReactJS, styled-components)`,
		},
		{
			title: `Interactive comment section`,
			href: `https://lively-biscuit-386e3a.netlify.app`,
			description: `(ReactJS, styled-components)`,
		},
		{
			title: `Notly - notes and articles managment tool`,
			href: `https://magenta-marshmallow-a93473.netlify.app`,
			description: `(ReactJS, Redux toolkit, tailwindcss)`,
		},
		{
			title: `Waves - online music player`,
			href: `https://cosmic-cranachan-b6e386.netlify.app/`,
			description: `(ReactJS)`,
		},
		{
			title: `Tic tac toe - popular Tic Tac Toe game`,
			href: `https://sprightly-kulfi-f88543.netlify.app/`,
			description: `(vanilla JavaScript)`,
		},
		{
			title: `Planet Site - 8-page planets fact site`,
			href: `https://celebrated-queijadas-2431fb.netlify.app`,
			description: `(vanilla JavaScript, anime.js)`,
		},
	];

	return (
		<CardStyled className="card">
			<ProjectsCardStyled>
				<div className="title">
					<h1>Projects</h1>
					<div className="underline"></div>
				</div>
				<div className="main-text">
					{projects.map((project) => (
						<div className="project">
							<a
								href={project.href}
								target="_blank"
								className="project__title"
								rel="noreferrer">
								{project.title}
							</a>
							<p className="project__desc">
								{project.description}
							</p>
						</div>
					))}
				</div>
			</ProjectsCardStyled>
		</CardStyled>
	);
};

const Animation = keyframes`${bounceInRight}`;

const CardStyled = styled.div`
	animation: 800ms ${Animation};
`;

const ProjectsCardStyled = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	width: 80%;
	height: 80%;
	/* background-color: rgb(0 10 100 / 0.1); */

	.main-text {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
		gap: 10px;
		width: 100%;
		margin-top: 40px;
		color: #3a3a3a;

		.project {
			display: flex;
			justify-content: center;
			align-items: flex-start;
			flex-direction: column;

			&__title {
				text-decoration: none;
				color: #8d5151;
				font-size: 20px;

				&:hover {
					color: #ba9d9d;
				}
			}

			&__desc {
				margin-top: 3px;
				font-size: 16px;
				font-style: italic;
				color: #707070;
			}
		}
	}
	@media screen and (max-width: 1200px) {
		.main-text {
			.project {
				&__title {
					font-size: 15px;
				}
				&__desc {
					font-size: 12px;
				}
			}
		}
	}
`;

export default ProjectsCard;
