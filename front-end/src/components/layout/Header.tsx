import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Avatar, IconButton} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="primary" elevation={1}>
      <Toolbar>
        <Avatar src="https://images.squarespace-cdn.com/content/v1/5452398fe4b08a9d2089dea2/1416676476031-LX3GW1BIQ5FOEUVOA74V/2014-10-22+16.32.47.jpg" alt="devsnips" sx={{ width: 36, height: 36, mr: 1 }} />
          <Typography variant="h6" fontWeight={600}>
            devsnips
          </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button variant="outlined" color="inherit" onClick={() => {}}>
            New Snippet
          </Button>
          <>
              <Button color="inherit" onClick={() => {}}>Login</Button>
              <Button color="inherit" onClick={() => {}}>Signup</Button>
          </>
          <>
              <Typography>"UserName"</Typography>
              {/* <IconButton onClick={console.log("Home")} sx={{ color: 'inherit' }}>
                <ExpandMoreIcon />
              </IconButton> */}
              {/* <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={() => { navigate('/account'); handleClose(); }}>Account</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu> */}
            </>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
