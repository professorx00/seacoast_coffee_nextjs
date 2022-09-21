import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";

export default function NavBar() {
  const session = useSession();
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const pages = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Roast", link: "/roast" },
    { title: "Packaging", link: "/packaging" },
    { title: "Reports", link: "/reports" },
    { title: "Invoices", link: "/invoices" },
    { title: "Services", link: "/serviceCalls" },
  ];

  const handleUserMenu = (page) => {
    console.log(page);
    if (page === "Logout") {
      signOut();
      return;
    }
    if (page) {
      router.push("/user/" + page.toLowerCase());
    }
  };

  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (link) => {
    setAnchorElNav(null);
    router.push(link);
  };

  const handleCloseUserMenu = (page) => {
    setAnchorElUser(null);
    handleUserMenu(page);
  };

  if (session.status === "authenticated") {
    return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            {/* Small Menu */}
            <Box
              sx={{
                width: "100%",
                display: { md: "none", xs: "flex" },
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <IconButton
                  size="small"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                >
                  {pages.map((page) => (
                    <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page.title}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  backgroundColor: "#d9c5ad",
                  borderRadius: 1,
                  width: 200,
                  height: 75,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/logo.png"
                  alt="logo"
                  layout="fixed"
                  width={150}
                  height={50}
                />
              </Box>
              {/* User Menu */}
              <Box>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/favicon.ico" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Box>
            {/* Large Menu */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                display: { md: "flex", sm: "none", xs: "none" },
                width: "100%",
              }}
            >
              <Box
                sx={{
                  p: 2,
                  backgroundColor: "#d9c5ad",
                  borderRadius: 1,
                  width: 200,
                  height: 75,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/logo.png"
                  alt="logo"
                  layout="fixed"
                  width={150}
                  height={50}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                {pages.map((page) => (
                  <Button
                    size="small"
                    key={page.title}
                    onClick={() => handleCloseNavMenu(page.link)}
                    sx={{ my: 3, mx: 1, color: "black", display: "block" }}
                    variant="contained"
                    color="info"
                  >
                    {page.title}
                  </Button>
                ))}
              </Box>
              {/* User Menu */}
              <Box>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/favicon.ico" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem
                      key={setting}
                      onClick={() => handleCloseUserMenu(setting)}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  } else {
    return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  p: 2,
                  backgroundColor: "#d9c5ad",
                  borderRadius: 1,
                  width: 200,
                  height: 75,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/logo.png"
                  alt="logo"
                  layout="fixed"
                  width={150}
                  height={50}
                />
              </Box>
              <Button
                size="small"
                onClick={() => router.push("/auth/userLogin")}
                sx={{ my: 3, mx: 1, color: "black", display: "block" }}
                variant="contained"
                color="info"
              >
                Login
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
}
