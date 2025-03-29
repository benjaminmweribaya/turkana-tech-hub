import { useState, useContext } from "react";
import {
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    MenuItem,
    Select,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import { LanguageContext } from "../context/LanguageContext";
import techHubLogo from "../assets/techhub-logo.png";

const NavBar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { language, setLanguage } = useContext(LanguageContext);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navItems = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Services", path: "/services" },
        { label: "Contact", path: "/contact" },
        { label: "Donate", path: "/donate" },
    ];

    return (
        <header className="bg-black shadow-md w-full">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo with adjusted size */}
                <div className="flex items-center space-x-4">
                    <img src={techHubLogo} alt="Tech Hub Logo" className="h-12 w-auto" />
                    <span className="text-white font-bold hidden sm:block">
                        Turkana Tech Youths Hub
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            to={item.path}
                            className="text-white hover:text-blue-600 font-medium transition px-4"
                        >
                            {item.label}
                        </Link>
                    ))}

                    {/* Language Selector */}
                    <div>
                        <Select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className="bg-white border border-gray-500 rounded-md p-1 text-black"
                        >
                            <MenuItem value="en">English</MenuItem>
                            <MenuItem value="sw">Swahili</MenuItem>
                        </Select>
                    </div>

                    <DarkModeToggle />
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <IconButton edge="end" color="inherit" onClick={handleDrawerToggle}>
                        <MenuIcon className="text-white " />
                    </IconButton>
                </div>
            </div>

            {/* Mobile Drawer */}
            <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
                <div className="w-64 p-4 flex flex-col space-y-4">
                    {/* Close Button for Mobile Menu */}
                    <div className="flex justify-end">
                        <IconButton onClick={handleDrawerToggle}>
                            <CloseIcon className="text-gray-800" />
                        </IconButton>
                    </div>
                    <List>
                        {navItems.map((item) => (
                            <ListItem button key={item.label} onClick={handleDrawerToggle}>
                                <Link to={item.path} className="w-full text-gray-800 text-lg">
                                    <ListItemText primary={item.label} />
                                </Link>
                            </ListItem>
                        ))}
                        <ListItem>
                            {/* Language Selector (Only on Mobile) */}
                            <Select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className="bg-white border border-gray-300 rounded-md p-1 text-gray-700 w-full"
                            >
                                <MenuItem value="en">English</MenuItem>
                                <MenuItem value="sw">Swahili</MenuItem>
                            </Select>
                        </ListItem>
                        <ListItem>
                            <DarkModeToggle />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </header>
    );
};

export default NavBar;
