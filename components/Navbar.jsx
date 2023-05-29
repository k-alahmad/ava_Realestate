import Link from "next/link";
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	IconButton,
	Flex,
	Box,
	Spacer,
} from "@chakra-ui/react";
import Image from "next/image";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import Logo from "../assets/images/Logo.png";
const Navbar = () => (
	<Flex
		p='2'
		borderBottom='2px'
		borderColor='gray.200'
		backgroundColor={"blackAlpha.900"}
	>
		<Box>
			<Link href='/'>
				<Image src={Logo} alt='Logo' width={60} height={0} />
			</Link>
		</Box>
		<Spacer />
		<Box>
			<Menu>
				<MenuButton
					as={IconButton}
					icon={<FcMenu />}
					variant='outline'
					color='red.400'
				/>
				<MenuList>
					<Link href='/' passHref>
						<MenuItem icon={<FcHome />}>Home</MenuItem>
					</Link>
					<Link href='/search' passHref>
						<MenuItem icon={<BsSearch />}>Search</MenuItem>
					</Link>
					<Link href='/search?purpose=for-sale' passHref>
						<MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
					</Link>
					<Link href='/search?purpose=for-rent' passHref>
						<MenuItem icon={<FiKey />}>Rent Property</MenuItem>
					</Link>
				</MenuList>
			</Menu>
		</Box>
	</Flex>
);

export default Navbar;
