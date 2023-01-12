import { Layout, Menu, Breadcrumb } from 'antd';

import Link from 'next/link';
// import Logo from '../pageComponents/common/Logo';
import { useRouter } from 'next/router';
// import IconItSelf from '../pageComponents/common/IconItSelf';
import { useEffect, useState } from 'react';
// import { UserInfo } from './';
import IconItSelf from "../common/iconItSelf";
import dynamic from 'next/dynamic';
import { useRecoilState } from 'recoil';
//import { authority } from '../../states/admin/atomAdmin';

//const IconsWithImg = dynamic(() => import('../pageComponents/common/iconsWithImg'));
//const Logo = dynamic(() => import('../pageComponents/common/Logo'));

export default function JayTopBar() {
	const router = useRouter();
	const filteredPath: string[] = router.pathname.split('/', 2);

	useEffect(() => {}, []);

	return (
		<nav className="top-main">
			<div className="logo">
				
			</div>
			<div className="right-side-menu">
				<Link href="/">
					<a>
						<IconItSelf
							url={'/assets/about.png'}
							title={'TestPage1'}
						/>
					</a>
				</Link>
				<Link href="/composition">
					<a>
						<IconItSelf
							url={'/assets/about.png'}
							title={'TestPage2'}
							
						/>
					</a>
				</Link>
				

				{/* <UserInfo /> */}
			</div>
			<style jsx>
				{`
					.top-main {
						display: flex;
						align-items: center;
						background: #051222;
						box-shadow: 0px 0px 5px rgba(0, 0, 0, 25);
						justify-content: space-between;
					}
					.right-side-menu {
						display: flex;
						gap: 20px;
					}
					.logo {
						margin-left: 20px;
					}
				`}
			</style>
		</nav>
	);
}
