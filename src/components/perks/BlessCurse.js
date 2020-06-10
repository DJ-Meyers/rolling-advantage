import React, { Fragment, useContext } from 'react';
import { Button, Grid, Image } from 'semantic-ui-react';
import DeckContext from '../../context/deck/deckContext';
import PerksContext from '../../context/perks/perksContext';

import Bless from '../../assets/images/icons/Effects/Bless.png';
import Curse from '../../assets/images/icons/Effects/Curse.png';
import Minus1 from '../../assets/images/icons/Effects/Minus1.png';
import { bless, curse, playerMinus1 } from '../../context/cards/base';

const BlessCurse = () => { 

  const deckContext = useContext(DeckContext);
  let {
    addCard,
    resetDeck
  } = deckContext;

  const perksContext = useContext(PerksContext);
  let {
    resetPerks
  } = perksContext;

  return (
    <Fragment>
      <Grid columns='equal'>
        <Grid.Column className='centered'>
          <Button.Group fluid basic widths='4'>
            <Button compact onClick={()=>{ addCard(bless); }}>
                <Image src={Bless} />
            </Button>
            <Button compact onClick={()=>{ addCard(curse); }}>
                <Image src={Curse} />
            </Button>
            <Button compact onClick={()=>{ addCard(playerMinus1); }}>
                <Image src={Minus1} />
            </Button>
            <Button compact icon='undo alternate' onClick={()=>{ resetDeck(); resetPerks(); }} />
          </Button.Group>
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default BlessCurse;
