import React, { useContext } from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { AppContext } from "@/app/page-context";

const DrawerComponent = ({MenuOptions}: { MenuOptions: string[] }) => {
  const { openDrawer, handleToggleDrawer } = useContext(AppContext);
  return (
    <Drawer anchor="right" open={openDrawer} onClose={handleToggleDrawer}>
        <List>
          {MenuOptions.map(option => (
            <a href={`#${option}`}>
              <ListItem button onClick={handleToggleDrawer}>
              <ListItemText primary={option} />
              </ListItem>
            </a>
          ))}
        </List>
    </Drawer>
  );
};

export default DrawerComponent;