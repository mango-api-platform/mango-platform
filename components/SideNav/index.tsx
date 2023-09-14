import React from "react";

import { Box, Drawer, useMediaQuery } from "@mui/material";

interface SideNavProps {
  isOpenDrawer?: boolean = true
  handleDrawerToggle?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const SideNav = ({
  isOpenDrawer,
  handleDrawerToggle
}: SideNavProps) => {

  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <div className="bg-transparent shadow-2xl">
      <Box component="nav" className="2xl:container 2xl:mx-auto sm:py-6 sm:px-7 py-5 px-4">
        <Drawer
          container={container}
          anchor="left"
          open={isOpenDrawer}
          onClose={handleDrawerToggle}
        >
          Drawer
        </Drawer>
      </Box>
    </div>
  )
}
