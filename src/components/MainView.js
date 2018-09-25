import React, { Component } from 'react'
import { CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { translate, right } from '../actions';
import ButtonContainer from './ButtonContainer';
import NormalCard from './NormalCard';
import FinalMessage from './FinalMessage'

class GuessCard extends Component {
  render() {
    const { index, numWords, word, initialWord, translate, right, bad, over, fails, pushUpsFail, reset } = this.props
    return (
      <div>
        {over ? (
        <FinalMessage 
          fails = { fails }
          pushUpsFail = { pushUpsFail }
          over = { over }
          reset={ reset }
            />
        ):(
        <NormalCard
          index={ index }
          numWords={ numWords }
          word={ word }
          initialWord={ initialWord }
          translate={ translate }
          right={ right }
          bad={ bad }
        />
      )}
    </div>
    )
}
}

export default GuessCard