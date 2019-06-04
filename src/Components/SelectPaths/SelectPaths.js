import React from 'react';
//components materials
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
//.. forder Imagenes


class SelectPath extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }
    }
    handleExpandClick() {
        this.setState(state => ({ expanded: !state.expanded }));
    }

    render() {
        return (
            <>

                <Typography>Seleccione su ruta </Typography>
                <br />
                <Card >
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Recipe" >
                                R
                                     </Avatar>
                        }
                        action={
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Nombre del usuario"
                        subheader="Fecha y hora actualizada cuando habilita la ruta "
                    />
                    <CardMedia
                        image=""
                        title="Paella dish"
                    />
                    <CardContent>
                        <Typography component="p">
                            información sobre la ruta que brinda el usuario
                                </Typography>
                    </CardContent>
                    <CardActions disableActionSpacing>
                        <IconButton aria-label="Add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="Share">
                            <ShareIcon />
                        </IconButton>
                        <IconButton
                            onClick={this.handleExpandClick.bind(this)}
                            aria-expanded={this.state.expanded}
                            aria-label="Show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Informacion sobre el conductor: </Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                minutes.
                                    </Typography>
                            <Typography paragraph>
                                Heat oil in a (14- t
                                    </Typography>
                            <Typography paragraph>
                                Add rice a
                                    </Typography>
                            <Typography>
                                Set aside off
                                    </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
                <Grid container item xs={12}>
                    <Grid item xs={3}>
                        {/* of 3 */}
                    </Grid>
                    <Grid item xs={6}>

                    </Grid>
                    <Grid item xs={3}>
                        {/* of 3 */}
                    </Grid>

                </Grid>


            </>
        )
    }


}
export default SelectPath