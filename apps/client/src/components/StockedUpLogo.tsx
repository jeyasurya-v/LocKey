import React from 'react';
import LogoBlack from '../assets/stockedup-logo-black.png';
import LogoWhite from '../assets/stockedup-logo-white.png';

type LogoVariant = 'black' | 'white';

interface StockedUpLogoProps
	extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
	variant: LogoVariant;
}

// function StockedUpLogo(props: StockedUpLogoProps) {
// 	const variant = props.variant;

// 	function getSrc(variant: LogoVariant): string {
// 		if (variant == 'white') {
// 			return LogoWhite;
// 		} else if (variant == 'black') {
// 			return LogoBlack;
// 		}
// 		return '';
// 	}

// 	return (
// 		<img
// 			{...props}
// 			src={getSrc(variant)}
// 			alt="LocKey logo"
// 			width={340}
// 			height={115}
// 		/>
// 	);
// }


function StockedUpLogo(props: StockedUpLogoProps) {
	const variant = props.variant;  // Not used in this case, but can be kept for future flexibility

	// Removed getSrc function and image references

	return (
		<span // Use span instead of img
			{...props}
			style={{ color: 'black', fontSize: '42px', fontFamily: 'Montserrat' }}
		>
			<span style={{ color: 'inherit' }}>Loc</span>
			<span style={{ color: 'var(--link-primary)' }}>K</span>ey
		</span>
	);
}

export default StockedUpLogo;
