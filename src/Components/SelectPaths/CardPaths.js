import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import Automobile1 from '../../Images/autmobile1.jpg'
import Avatar from '@material-ui/core/Avatar';

const styles = {
    title: {
        height: 40,
        marginBottom: 15
    },
    author: {

    },
    summary: {
        height: 100
    },
    card: {
        maxWidth: 345,
        height: 400,
        marginBottom: 40
    },
    media: {
        height: 140,
    },
};

function CardPaths(props) {
    let liked = props.liked;
    if (liked == undefined)
        liked = []
    const { classes } = props;
    console.log(liked)
    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="Recipe"  >
                        R
                    </Avatar>
                }
                title="Nombre del usuario"
                subheader="Fecha y hora actualizada cuando habilita la ruta "
            />
            <CardMedia
                className={classes.media}
                image={Automobile1}
                title= "Destino"
            />
            <CardContent>
                <div className={classes.title}>
                    <Typography gutterBottom variant="h5" component="h2">
                       Destino
                    </Typography>
                </div>
                <div className={classes.summary}>
                    <Typography>
                        informaciòn de la ruta
                    </Typography>
                </div>
            </CardContent>

            <CardActions>
                <IconButton aria-label="Add to favorites" onClick={() => props.likePath(props.Pathid)} /*disabled={props.disabledlikes}*/ color={liked.find(like => { return like == props.Pathid }) == undefined ? "default" : "primary"} >
                    <FavoriteIcon />
                </IconButton >
                <Button size="small" color="primary" >
                    seleccionar ruta
                </Button>
            </CardActions>
        </Card>
    );
}

CardPaths.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardPaths);