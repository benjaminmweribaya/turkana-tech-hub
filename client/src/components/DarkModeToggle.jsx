import { useTheme } from "../hooks/useTheme";
import { IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton onClick={toggleTheme} className="transition duration-300">
      {theme === "dark" ? (
        <LightModeIcon className="text-yellow-400" />
      ) : (
        <DarkModeIcon className="text-gray-800" />
      )}
    </IconButton>
  );
};

export default DarkModeToggle;
