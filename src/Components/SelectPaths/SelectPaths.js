import React from 'react';
//components materials
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
//Components
import CardPaths from './CardPaths';
import theme from '../../theme2';
//firebase
import firebase from "firebase";

class SelectPath extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            Path:[],
            likes:[],
            userAccount:null,
        }
    }
    renderCards(){
        var Path=this.state.Path;
        if(Path.length==0)
            return Path.map(routes=>{
                return(
                    <Grid item xs={6} sm={3} style={theme.styles.cardGrid} key={"k"+routes.key}>
                    <CardPaths {...routes} Pathid={routes.key} likePath={this.setLike.bind(this)} liked={this.state.likes} /*disabledlikes={this.state.userAccount==null?true:false}*//>{/* los ... trae todos los atributos del que se esta haciendo */}
                    </Grid>
                )
            });
      }
      getRoutes(){
        return firebase.database().ref('/stories').once('value').then((Stories)=> {
            this.setState({Book:Stories.val()});
        // ...
        });
      }
      setLike(Pathid){
        let PathsLikes=this.state.likes
        let userId=this.state.userAccount.uid
        if (PathsLikes.find(path=>{return path==Pathid})==Pathid)
            PathsLikes= PathsLikes.filter(path=>{return path!=Pathid})
        else
            PathsLikes.push(Pathid)

        firebase.database().ref('/likes/'+userId).set({
          "path": PathsLikes
        }, (error)=> {
          if (error) {
            console.error(error)
          } else {
            this.setState({likes:PathsLikes});
          }
        });
      }  
    render() {
        const { styles } = theme;
        return (
            <>
                <Grid container spacing={24}  direction="row" justify="flex-start" alignItems="flex-start"  style={styles.ContentMain}>
                                {
                                    this.renderCards()
                                }
                </Grid>
            </>
        )
    }


}
export default SelectPath