import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'inline-block',
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
}));

const MarcadorPaginacao = (props) => {
  const classes = useStyles();
  return (
    <div className={'col-12 text-center'}>
      <div className={classes.root }>
      <Pagination count={3} color="primary" />
      </div>
    </div>
    )
};

export default MarcadorPaginacao;