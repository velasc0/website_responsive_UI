import React from "react";
import "./Header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
	return (
		<>
			<div className='section__padding'></div>
			<div className='gpt3__header section__padding' id='home'>
				<div className='gpt3__header-content'>
					<h1 className='gradient__text'>
						Let's build something amazing with GPT-3 OpenAI
					</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						lacinia cursus ex, non aliquam ante facilisis eget. Phasellus auctor
						suscipit enim. Sed facilisis neque ut ultricies vehicula. Vivamus at
						felis nunc. Phasellus nisi lorem, rhoncus vel libero vitae,
						vestibulum rutrum metus. Sed mi tellus, dapibus et neque nec,
						blandit facilisis arcu. Ut imperdiet libero velit, eget fermentum
						odio consectetur id. Vestibulum at gravida dui, nec congue ante.
						Aliquam condimentum volutpat interdum. Nam aliquet, nibh vel euismod
						cursus, turpis metus efficitur risus, vitae molestie eros justo non
						dui. Aliquam eleifend pellentesque dapibus. In faucibus non velit
						rutrum pellentesque. Nam a ipsum venenatis tellus cursus iaculis.
						Etiam accumsan quis libero a porta.
					</p>
					<div className='gpt3__header-content__input'>
						<input type='email' placeholder='Your email address' />
						<button type='button'>Get Started</button>
					</div>
					<div className='gpt3__header-content__people'>
						<img src={people} alt='people' />
						<p>1,600 people requested access in last 24 hours</p>
					</div>
				</div>
				<div className='gpt3__header-image'>
					<img src={ai} alt='ai' />
				</div>
			</div>
		</>
	);
};

export default Header;
