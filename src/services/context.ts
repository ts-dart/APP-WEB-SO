import { createContext } from "react";
import { LoggedinUser } from "../types";

const ThemeContext = createContext({} as {loggedinUser: LoggedinUser, setLoggedinUser: React.Dispatch<React.SetStateAction<LoggedinUser>>})

export default ThemeContext

