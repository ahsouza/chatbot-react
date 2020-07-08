import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SchoolIcon from '@material-ui/icons/School';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Chip from '@material-ui/core/Chip';
import StoreIcon from '@material-ui/icons/Store';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));



const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);


export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
        <StyledBadge
          overlap="circle"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          variant="dot"
        >
          <Avatar alt="Remy Sharp" src="https://avatars0.githubusercontent.com/u/28975240?s=460&u=950a3722d69e077b7e4a9879fcaad2cfa28be3e7&v=4" />
        </StyledBadge>

     
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Aníbal Henrique De Souza"
        subheader="27 anos, ES/Serra"
      />
      <CardMedia
        className={classes.media}
        image="https://academy.vcsis.com.br/wp-content/uploads/2015/05/vender-mais-em-seu-site-01.gif"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
          Desenvolvedor De Software
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          +5 anos de experiência
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
      


        <IconButton aria-label="share" color="red">
          <FavoriteIcon />
        </IconButton>

          <Chip
            icon={<StoreIcon />}
            label="Serviços"
            clickable
            color="primary"
          />
        <IconButton aria-label="phone" color="secondary">
          <LocalPhoneIcon />
        </IconButton>

        
          <Chip
            icon={<AttachMoneyIcon />}
            label="Pague"
            clickable
            color="primary"
          />
        
     

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Olá, Sou Aníbal Henrique</Typography>
          
          <Typography paragraph>
            Sou um Desenvolvedor Full-Stack com +5 anos de experiência trabalhando com ecossistema JavaScript.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}