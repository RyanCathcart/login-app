import { AppBar, Box, List, ListItem, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../store/configureStore';
import SignedInMenu from './SignedInMenu';

const rightLinks = [
  { title: "Login", path: "/login" },
  { title: "Register", path: "/register" },
];

const navStyles = {
  color: 'inherit',
  textDecoration: "none",
  typography: 'h6',
  "&:hover": { color: "grey.500" },
  "&.active": { color: "text.secondary" },
};

export default function Header() {
  const { user } = useAppSelector((state) => state.account);
  return (
    <AppBar position='static'>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box display='flex' alignItems='center'>
          <Typography 
            variant='h6' 
            component={NavLink}
            to="/"sx={navStyles}
          >
            Login App
          </Typography>
        </Box>
        {user ? (
          <SignedInMenu />
        ) : (
          <List sx={{ display: "flex" }}>
          {rightLinks.map(({ title, path }) => (
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={navStyles}
            >
              {title}
            </ListItem>
          ))}
        </List>
        )}
      </Toolbar>
    </AppBar>
  );
}
