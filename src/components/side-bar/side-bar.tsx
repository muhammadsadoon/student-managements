import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
// react icons imports
import { MdOutlineEmojiEvents } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { GoHome } from "react-icons/go";
import { PiStudentBold } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineClass } from "react-icons/md";
import { FcAbout, } from "react-icons/fc";
import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '@mui/material/Avatar';
import { UserContext } from '../../utils/contextApi';
import type { CheckAuthRole } from '../../utils/types/checkAuthType';
import Tooltip from '@mui/material/Tooltip';


const drawerWidth = 240;

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window?: () => Window;
    children?: React.ReactNode;
}

export default function ResponsiveDrawer(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const [isRoleAdminOrStudent, setIsRoleAdminOrStudent] = React.useState<CheckAuthRole>("Student")

    // context Api
    const context: any = React.useContext(UserContext);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    React.useEffect(() => {
        setIsRoleAdminOrStudent(context?.isRoleAdminOrStudent);
    }, []);

    const drawer = (
        <div>
            <Toolbar >
                <h1>DashBoard <button className={`${context?.isRoleAdminOrStudent == "student" ? "text-green-800 border-green-800 " : "text-red-800 border-red-800"} border rounded-md p-1`}>{context?.isRoleAdminOrStudent}</button></h1>
            </Toolbar>
            <Divider />
            <List>
                {['DashBoard', 'Teacher', 'Assignments', 'Setting and Profile'].map((text, index) => (
                    <Link to={text == "DashBoard" ? "/" : text == "Setting and Profile" ? "setting-profile" : text} key={index}>
                        <Tooltip title={text}>
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {(index === 0)
                                            ?
                                            (<GoHome className='text-2xl' />)
                                            :
                                            (index == 1)
                                                ?
                                                (<MdOutlineClass className='text-2xl' />)
                                                :
                                                (index == 2)
                                                    ?
                                                    (<PiStudentBold className='text-2xl' />)
                                                    :
                                                    (<IoSettingsOutline className='text-2xl' />)}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        </Tooltip>
                    </Link>
                ))}
            </List>
            <Divider />
            <List>
                {['Events', 'Billing', 'About Us'].map((text, index) => (
                    <Link to={text} key={index}>
                        <ListItem key={text} disablePadding>
                            <Tooltip title={text}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {(index === 0)
                                            ?
                                            (<MdOutlineEmojiEvents className='text-2xl' />)
                                            :
                                            (index == 1)
                                                ?
                                                (<RiBillLine className='text-2xl' />)
                                                :
                                                (<FcAbout className='text-2xl' />)
                                        }
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </Tooltip>
                        </ListItem>
                    </Link>
                ))}
                {isRoleAdminOrStudent == "Admin" && ["add-student"].map((text, index) => (
                    <Link to={text} key={index}>
                        <Tooltip title={text}>
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {(index === 0)
                                            ?
                                            (<PiStudentBold className='text-2xl' />)
                                            :
                                            (index == 1)
                                                ?
                                                (<RiBillLine className='text-2xl' />)
                                                :
                                                (<FcAbout className='text-2xl' />)
                                        }
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        </Tooltip>
                    </Link>
                ))}
            </List>
        </div>
    );

    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <>
            <Box sx={{
                display: document.getElementsByTagName("body")[0].clientWidth > 600 ? "flex" : "",
            }}>
                <IconButton
                    className='fixed top-4 left-4'
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <AiOutlineMenu color='black' />
                </IconButton>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onTransitionEnd={handleDrawerTransitionEnd}
                        onClose={handleDrawerClose}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        slotProps={{
                            root: {
                                keepMounted: true, // Better open performance on mobile.
                            },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                {props.children}

            </Box>
        </>
    );
}
