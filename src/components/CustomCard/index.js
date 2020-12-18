import React, { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Background from '../../assets/images/Background.jpg'


const CustomCard = ({ character }) => {

  const { name, height } = character;

  const [learnMore, setLearnMore] = useState(null);

  const handleLearnMore = () => {
    setLearnMore(character)
  }

  return (
    <div className='card'>
      <Card className='card_container'>
        <CardActionArea>
          <CardMedia image={Background} className='card_image' />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Height: {height}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to='/details'><Button size="small" color="primary" className='card_details' onClick={() => handleLearnMore()}>
            Learn More
        </Button></Link>
        </CardActions>
      </Card>
    </div >
  )
}

export default CustomCard
