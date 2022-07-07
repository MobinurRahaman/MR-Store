import { useNavigate } from 'react-router-dom'
import { List, ListItem, ListItemText, Divider, IconButton, Box, SwipeableDrawer } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
})

export default function Drawer(isOpen, setOpen) {
  const classes = useStyles();
  const navigate = useNavigate();
  
  return (
    <SwipeableDrawer
      anchor="left"
      open={isOpen}
      onClose={() => setOpen(false)}
      onOpen={() => {setOpen(true)}}>
      
      <div className={classes.list}>
        <Box textAlign="center" p={2}>
          Components
        </Box>
        <Divider />
        <List>
          <ListItem button onClick={() => navigate('/')}>
            <ListItemText primary={'Home'} />
          </ListItem>
          <ListItem button onClick={() => navigate('/privacy-policy')}>
            <ListItemText primary={'Privacy policy'} />
          </ListItem>
          <ListItem button onClick={() => navigate('/about')}>
            <ListItemText primary={'About'} />
          </ListItem>
          <ListItem button onClick={() => navigate('/admin')}>
            <ListItemText primary={'Admin'} />
          </ListItem>
        </List>
      </div>
    </SwipeableDrawer>
  )
}