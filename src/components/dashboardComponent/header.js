import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    color:'inherit',
    textDecoration:'none'
  },
  active : {
    color : '#1976d2',
    padding: theme.spacing(1),
    flexShrink: 0,
    textDecoration:'none'
  }

}));

const HeaderComponent = (props) => {
  const classes = useStyles();
  const { sections, title } = props;
    return (
        <React.Fragment>
        <Toolbar className={classes.toolbar}>
          <Button size="small">Infosys</Button>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            {title}
          </Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Toolbar>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          {sections.map((section) => (
            <Link 
                to={section.url} 
                color="inherit" 
                noWrap  
                variant="body2"
                className={'/dashboard/' + props.active === section.url ? classes.active : classes.toolbarLink} 
                key={section.title}
                onClick={() => props.linkClick(section.url)}
            >
            {section.title}
            </Link>
          ))}
        </Toolbar>
      </React.Fragment>
  
    )
  }

export default HeaderComponent