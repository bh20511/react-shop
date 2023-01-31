import * as React from 'react';
import Pagination from '@mui/material/Pagination';

function PaginationExample({totalPages,condition,setCondition}) {
  const [page, setPage] = React.useState(1);

  return (
    <Pagination count={totalPages} page={+condition.page} onChange={(e,page)=>{
        setCondition({...condition,page});
    }} />
  );
}

export default PaginationExample;