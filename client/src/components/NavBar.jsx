import { useState, useContext } from "react";
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Menu, MenuItem, Select } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
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
        <AppBar position="sticky" className="bg-white shadow-md">
            <Toolbar className="flex justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img src={techHubLogo} alt="Tech Hub Logo" className="h-10 mr-2" />
                    <Typography variant="h6" className="text-blue-700 font-bold">
                        Turkana Tech Youths Hub
                    </Typography>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            to={item.path}
                            className="text-gray-800 hover:text-blue-600 font-medium transition"
                        >
                            {item.label}
                        </Link>
                    ))}

                    {/* Language Selector */}
                    <Select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="bg-white border border-gray-300 rounded-md p-1 text-gray-700"
                    >
                        <MenuItem value="en">English</MenuItem>
                        <MenuItem value="sw">Swahili</MenuItem>
                    </Select>
                    <DarkModeToggle />
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden flex items-center">
                    {/* Language Selector for Mobile */}
                    <Select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="bg-white border border-gray-300 rounded-md p-1 text-gray-700"
                    >
                        <MenuItem value="en">English</MenuItem>
                        <MenuItem value="sw">Swahili</MenuItem>
                    </Select>
                    
                    <IconButton edge="end" color="inherit" onClick={handleDrawerToggle}>
                        <MenuIcon className="text-blue-700" />
                    </IconButton>
                </div>
            </Toolbar>

            {/* Mobile Drawer */}
            <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
                <List className="w-60 p-4">
                    {navItems.map((item) => (
                        <ListItem button key={item.label} onClick={handleDrawerToggle}>
                            <Link to={item.path} className="w-full">
                                <ListItemText primary={item.label} className="text-gray-800 text-lg" />
                            </Link>
                        </ListItem>
                    ))}
                    <ListItem>
                        <DarkModeToggle />
                    </ListItem>
                </List>
            </Drawer>
        </AppBar>
    );
};

export default NavBar;
